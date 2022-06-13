// С помощью prompt запрашиваем у пользователя что он хочет сделать (+ - / *). Спрашиваем до тех пор, пока он не введет допустимое значение
// Запрашиваем сколько операндов он хочет использовать. Это должно быть ЧИСЛО больше 1 и меньше 7. Спрашиваем пока пользователь не введет допустимое значение
// Запрашиваем у пользователя каждый операнд. Это должно быть ЧИСЛО. Запрашиваем пока пользователь не введет допустимое значение
// С помощью alert или console.log выводим финальный результат действия (+ - / *)

// debugger;

do{
    action = prompt("Выберите действие (+ - * /)")
} while (action !== "+" && action !== "-" && action !== "*" && action !== "/");

do{
operands = parseInt(prompt("Сколько чисел Вы будете использовать?").replaceAll(" ", ""));
} while(operands <= 1 || operands >=7 || isNaN(operands));


total = 0;
for(i = 1; i <= operands; i++) {
    do {
        num = parseInt(prompt(`Введите число ${i}`).replaceAll(" ", ""));
    } while(isNaN(num))

    if(action === "+") {
        total += num;
    } else if(action === "-") {
        if(i ===1) {
            total = num;
        } else {
            total -= num;
        }
    } else if(action === "*") {
        if(i === 1) {
            total = num;
        } else {
            total *= num;
        }
    } else {
        if(i === 1) {
            total = num;
        } else {
            total /= num;
        }
    }
}

alert(`Результат: ${total}`);


