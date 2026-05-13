"use strict";

const State = {
    cart: 0,
    lastCategory: null,
    config: {}
};

const api = {
    get(path) {
        return fetch(`./${path}`).then(res => {
            if (!res.ok) throw new Error("Fetch failed");
            return res.json();
        });
    }
};

const ui = {
    getElement: (id) => document.getElementById(id),
    render: (html) => {
        const container = ui.getElement(State.config.container);
        if (container) container.innerHTML = html;
    },
    notify: (msg) => {
        const toast = document.createElement('div');
        toast.className = 'notification';
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },
    updateCartUI: () => {
        const el = ui.getElement(State.config.cartCounter);
        if (el) {
            el.textContent = State.cart.toString();
            el.classList.add('bump');
            setTimeout(() => el.classList.remove('bump'), 300);
        }
    }
};

const Actions = {
    loadHome() {
        ui.render(`
            <section class="hero">
                <h1>Elevate Your Game</h1>
                <p>Premium gear for athletes who never settle for less.</p>
            </section>
            <div style="text-align: center;">
                <p>Welcome to SportVibe. Explore our collections to find your perfect fit.</p>
                <br>
                <button class="specials-btn" id="btn-explore">Explore Collections</button>
            </div>
        `);
        var _a;
        (_a = ui.getElement('btn-explore')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', Actions.loadCatalog);
    },

    loadCatalog() {
        ui.render('<p>Syncing collections...</p>');
        api.get('data/categories.json').then(categories => {
            const cards = categories.map(cat => `
                <article class="category-card" data-slug="${cat.shortname}">
                    <h2>${cat.name}</h2>
                    <p>${cat.notes}</p>
                </article>
            `).join('');

            ui.render(`
                <h1>Our Collections</h1>
                <div class="category-list">${cards}</div>
                <button class="specials-btn" id="btn-featured">Featured Gear</button>
            `);

            document.querySelectorAll('.category-card').forEach(card => {
                card.addEventListener('click', () => {
                    Actions.loadCategory(card.getAttribute('data-slug'));
                });
            });

            var _a;
            (_a = ui.getElement('btn-featured')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                const random = categories[Math.floor(Math.random() * categories.length)];
                Actions.loadCategory(random.shortname);
            });
        }).catch(() => ui.render('<div class="error">Failed to load catalog</div>'));
    },

    loadCategory(slug) {
        ui.render('<p>Fetching items...</p>');
        api.get(`data/${slug}.json`).then(data => {
            const items = data.items.map(item => `
                <div class="item-card">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span class="price">$${item.price.toLocaleString()}</span>
                    <button class="add-to-cart-btn" data-name="${item.name}">Add to Cart</button>
                </div>
            `).join('');

            ui.render(`
                <button id="btn-back" style="margin-bottom: 2rem; border: none; background: none; cursor: pointer; color: #666;">&larr; Back</button>
                <h1>${data.category}</h1>
                <div class="item-grid">${items}</div>
            `);

            var _a;
            (_a = ui.getElement('btn-back')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', Actions.loadCatalog);
            
            document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const name = btn.getAttribute('data-name');
                    State.cart++;
                    ui.updateCartUI();
                    ui.notify(`Added ${name} to cart!`);
                });
            });
        }).catch(() => ui.render('<div class="error">Items not found</div>'));
    }
};

const initApp = (config) => {
    State.config = config;
    var _a, _b;
    (_a = ui.getElement('home-link')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
        e.preventDefault();
        Actions.loadHome();
    });
    (_b = ui.getElement('catalog-link')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {
        e.preventDefault();
        Actions.loadCatalog();
    });
    Actions.loadHome();
};

document.addEventListener('DOMContentLoaded', () => {
    initApp({
        container: 'main-content',
        cartCounter: 'cart-count'
    });
});
