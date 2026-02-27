console.log("\n    =================== \u0406\u041D\u0421\u0422\u0420\u0423\u041A\u0426\u0406\u042F \u0417 \u0412\u0418\u041A\u041E\u0420\u0418\u0421\u0422\u0410\u041D\u041D\u042F ===================\n    \u0424\u0443\u043D\u043A\u0446\u0456\u044F triangle(\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F1, \u0442\u0438\u043F1, \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F2, \u0442\u0438\u043F2) \u0440\u043E\u0437\u0432'\u044F\u0437\u0443\u0454 \n    \u043F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0438\u0439 \u0442\u0440\u0438\u043A\u0443\u0442\u043D\u0438\u043A, \u0437\u043D\u0430\u0445\u043E\u0434\u044F\u0447\u0438 \u0432\u0441\u0456 \u0441\u0442\u043E\u0440\u043E\u043D\u0438 \u0442\u0430 \u0433\u043E\u0441\u0442\u0440\u0456 \u043A\u0443\u0442\u0438.\n    \n    \u2705 \u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438:\n      1\uFE0F\u20E3 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F1 \u2013 \u0447\u0438\u0441\u043B\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0448\u043E\u0433\u043E \u0432\u0456\u0434\u043E\u043C\u043E\u0433\u043E \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430.\n      2\uFE0F\u20E3 \u0442\u0438\u043F1 \u2013 \u0442\u0438\u043F \u043F\u0435\u0440\u0448\u043E\u0433\u043E \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430 (\u0440\u044F\u0434\u043E\u043A).\n      3\uFE0F\u20E3 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F2 \u2013 \u0447\u0438\u0441\u043B\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0432\u0456\u0434\u043E\u043C\u043E\u0433\u043E \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430.\n      4\uFE0F\u20E3 \u0442\u0438\u043F2 \u2013 \u0442\u0438\u043F \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430 (\u0440\u044F\u0434\u043E\u043A).\n    \n    \uD83D\uDCCB \u041C\u043E\u0436\u043B\u0438\u0432\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0442\u0438\u043F\u0456\u0432 (\u0442\u0438\u043F1 \u0442\u0430 \u0442\u0438\u043F2):\n      - \"leg\"               \u2013 \u043A\u0430\u0442\u0435\u0442\n      - \"hypotenuse\"       \u2013 \u0433\u0456\u043F\u043E\u0442\u0435\u043D\u0443\u0437\u0430\n      - \"adjacent angle\"   \u2013 \u043F\u0440\u0438\u043B\u0435\u0433\u043B\u0438\u0439 \u0434\u043E \u043A\u0430\u0442\u0435\u0442\u0430 \u043A\u0443\u0442 (\u0443 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445)\n      - \"opposite angle\"   \u2013 \u043F\u0440\u043E\u0442\u0438\u043B\u0435\u0436\u043D\u0438\u0439 \u0434\u043E \u043A\u0430\u0442\u0435\u0442\u0430 \u043A\u0443\u0442 (\u0443 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445)\n      - \"angle\"            \u2013 \u043E\u0434\u0438\u043D \u0437 \u0434\u0432\u043E\u0445 \u0433\u043E\u0441\u0442\u0440\u0438\u0445 \u043A\u0443\u0442\u0456\u0432 (\u043A\u043E\u043B\u0438 \u0437\u0430\u0434\u0430\u043D\u0430 \u0433\u0456\u043F\u043E\u0442\u0435\u043D\u0443\u0437\u0430)\n    \n    \uD83D\uDCDD \u041F\u0440\u0438\u043A\u043B\u0430\u0434\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F:\n      triangle(3, \"leg\", 4, \"leg\");\n      triangle(5, \"leg\", 30, \"adjacent angle\");\n      triangle(10, \"hypotenuse\", 45, \"angle\");\n    \n    \uD83D\uDD14 \u041F\u0440\u0438\u043C\u0456\u0442\u043A\u0430:\n      - \u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u043A\u0443\u0442\u0456\u0432 \u0432\u0432\u043E\u0434\u044F\u0442\u044C\u0441\u044F \u0443 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445. [cite: 36]\n      - \u0424\u0443\u043D\u043A\u0446\u0456\u044F \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454 \"success\" \u0430\u0431\u043E \"failed\". [cite: 42]\n    ===============================================================\n    ");
function triangle(value1, type1, value2, type2) {
    var a, b, c, alpha, beta;
    if (value1 <= 0 || value2 <= 0) {
        console.log("Zero or negative input");
        return "failed";
    }
    function Print() {
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
        }
        else {
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
    }
    else if (type1 === "leg" && type2 === "leg") {
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
    }
    else if ((type1 === "leg" && type2 === "adjacent angle") || (type1 === "adjacent angle" && type2 === "leg")) {
        if (type1 === "leg") {
            b = value1;
            alpha = value2;
        }
        else {
            alpha = value1;
            b = value2;
        }
        if (alpha >= 90) {
            console.log("incorrect value. angle has to be < 90");
            return "failed";
        }
        var alphaInRadians = (alpha * Math.PI) / 180;
        c = b / Math.cos(alphaInRadians);
        a = Math.sqrt(c * c - b * b);
        beta = 90 - alpha;
        Print();
        return "success";
    }
    else if ((type1 === "leg" && type2 === "opposite angle") || (type1 === "opposite angle" && type2 === "leg")) {
        if (type1 === "leg") {
            b = value1;
            beta = value2;
        }
        else {
            beta = value1;
            b = value2;
        }
        if (beta >= 90) {
            console.log("incorrect value. angle has to be < 90");
            return "failed";
        }
        alpha = 90 - beta;
        var betaInRadians = (beta * Math.PI) / 180;
        c = b / Math.sin(betaInRadians);
        a = Math.sqrt(c * c - b * b);
        Print();
        return "success";
    }
    else if ((type1 === "hypotenuse" && type2 === "angle") || (type1 === "angle" && type2 === "hypotenuse")) {
        if (type1 === "hypotenuse") {
            c = value1;
            beta = value2;
        }
        else {
            beta = value1;
            c = value2;
        }
        if (beta >= 90) {
            console.log("incorrect value. angle has to be < 90");
            return "failed";
        }
        alpha = 90 - beta;
        var alphaInRadians = (alpha * Math.PI) / 180;
        a = c * Math.sin(alphaInRadians);
        b = c * Math.cos(alphaInRadians);
        Print();
        return "success";
    }
    else {
        console.log("Please read the instructions again. Incorrect type or couple of type.");
        return "failed";
    }
}
