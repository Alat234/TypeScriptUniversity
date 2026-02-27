console.log(`
    =================== ІНСТРУКЦІЯ З ВИКОРИСТАННЯ ===================
    Функція triangle(значення1, тип1, значення2, тип2) розв'язує 
    прямокутний трикутник, знаходячи всі сторони та гострі кути.
    
    ✅ Параметри:
      1️⃣ значення1 – числове значення першого відомого елемента.
      2️⃣ тип1 – тип першого елемента (рядок).
      3️⃣ значення2 – числове значення другого відомого елемента.
      4️⃣ тип2 – тип другого елемента (рядок).
    
    📋 Можливі значення типів (тип1 та тип2):
      - "leg"               – катет
      - "hypotenuse"       – гіпотенуза
      - "adjacent angle"   – прилеглий до катета кут (у градусах)
      - "opposite angle"   – протилежний до катета кут (у градусах)
      - "angle"            – один з двох гострих кутів (коли задана гіпотенуза)
    
    📝 Приклади використання:
      triangle(3, "leg", 4, "leg");
      triangle(5, "leg", 30, "adjacent angle");
      triangle(10, "hypotenuse", 45, "angle");
    
    🔔 Примітка:
      - Значення кутів вводяться у градусах. [cite: 36]
      - Функція повертає "success" або "failed". [cite: 42]
    ===============================================================
    `);

function triangle(value1: number, type1: string, value2: number, type2: string): string {
    let a: number, b: number, c: number, alpha: number, beta: number;

    if (value1 <= 0 || value2 <= 0) {
        console.log("Zero or negative input");
        return "failed";
    }

    function Print(): void {
        console.log("a =" + a);
        console.log("b =" + b);
        console.log("c =" + c);
        console.log("alpha =" + alpha);
        console.log("beta =" + beta);
    }

    if ((type1 === "leg" && type2 === "hypotenuse") || (type1 === "hypotenuse" && type2 === "leg")) {
        if (type1 === "leg") {
            a = value1;
            c = value2;
        } else {
            a = value2;
            c = value1;
        }

        if (c <= a) {
            console.log("incorrect value. hypotenuse < leg");
            return "failed";
        }

        b = Math.sqrt(c * c - a * a);
        alpha = (Math.asin(a / c) * 180) / Math.PI;
        beta = (Math.asin(b / c) * 180) / Math.PI;

        if (beta === 0 || alpha === 0 || beta === 90 || alpha === 90) {
            console.log("incorrect value of sides");
            return "failed";
        }
        Print();
        return "success";

    } else if (type1 === "leg" && type2 === "leg") {
        a = value1;
        b = value2;
        c = Math.sqrt(a * a + b * b);
        alpha = (Math.asin(a / c) * 180) / Math.PI;
        beta = (Math.asin(b / c) * 180) / Math.PI;

        if (beta === 0 || alpha === 0 || beta === 90 || alpha === 90) {
            console.log("incorrect value of sides");
            return "failed";
        }
        Print();
        return "success";

    } else if ((type1 === "leg" && type2 === "adjacent angle") || (type1 === "adjacent angle" && type2 === "leg")) {
        if (type1 === "leg") {
            b = value1;
            alpha = value2;
        } else {
            alpha = value1;
            b = value2;
        }

        if (alpha >= 90) {
            console.log("incorrect value. angle has to be < 90");
            return "failed";
        }

        let alphaInRadians: number = (alpha * Math.PI) / 180;
        c = b / Math.cos(alphaInRadians);
        a = Math.sqrt(c * c - b * b);
        beta = 90 - alpha;
        Print();
        return "success";

    } else if ((type1 === "leg" && type2 === "opposite angle") || (type1 === "opposite angle" && type2 === "leg")) {
        if (type1 === "leg") {
            b = value1;
            beta = value2;
        } else {
            beta = value1;
            b = value2;
        }

        if (beta >= 90) {
            console.log("incorrect value. angle has to be < 90");
            return "failed";
        }

        alpha = 90 - beta;
        let betaInRadians: number = (beta * Math.PI) / 180;
        c = b / Math.sin(betaInRadians);
        a = Math.sqrt(c * c - b * b);
        Print();
        return "success";

    } else if ((type1 === "hypotenuse" && type2 === "angle") || (type1 === "angle" && type2 === "hypotenuse")) {
        if (type1 === "hypotenuse") {
            c = value1;
            beta = value2;
        } else {
            beta = value1;
            c = value2;
        }

        if (beta >= 90) {
            console.log("incorrect value. angle has to be < 90");
            return "failed";
        }

        alpha = 90 - beta;
        let alphaInRadians: number = (alpha * Math.PI) / 180;
        a = c * Math.sin(alphaInRadians);
        b = c * Math.cos(alphaInRadians);
        Print();
        return "success";

    } else {
        console.log("Please read the instructions again. Incorrect type or couple of type.");
        return "failed";
    }
}
