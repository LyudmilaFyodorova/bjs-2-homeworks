function parseCount(number) {
    if (parseFloat(number) === Nan) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat()
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        console.log(error);
    } finally {

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
        let perimeter = a + b + c;
        return Number(perimeter.toFixed(3));
    }

    get area() {
        let halfPerimeter = this.perimeter / 2;
        let area = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle();
    } catch (error) {
        console.log(error);
    } finally {
        return new Triangle {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}