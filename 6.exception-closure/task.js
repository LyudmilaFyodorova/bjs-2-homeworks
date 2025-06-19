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
    constructor(firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;

        if ((firstSide + secondSide) < thirdSide) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }



    get perimeter() {
        let perimeter = firstSide + secondSide + thirdSide;
        return perimeter.toFixed(3);
    }

    get area() {
        let halfPerimeter = this.perimeter / 2;
        let area = Math.sqrt(halfPerimeter * (halfPerimeter - firstSide) * (halfPerimeter - secondSide) * (halfPerimeter - thirdSide));
        return area.toFixed(3);
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
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