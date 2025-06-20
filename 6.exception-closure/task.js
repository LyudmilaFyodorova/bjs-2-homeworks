function parseCount(number) {
    let result = Number.parseFloat(number);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b <= c) || (b + c <= a) || (a + c <= b)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        const perimeter = this.a + this.b + this.c;
        return Number(perimeter);
    }

    get area() {
        this.halfPerimeter = this.perimeter / 2;
        const area = Math.sqrt(this.halfPerimeter * (this.halfPerimeter - this.a) * (this.halfPerimeter - this.b) * (this.halfPerimeter - this.c));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },

            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}