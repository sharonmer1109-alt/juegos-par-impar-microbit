
let ronda = 0
let respuesta = 0
let inicio = 0
let activo = false
let sumas = ["12 + 8", "15 + 10", "23 + 7", "35 + 5", "18 + 22"]
let resultados = [20, 25, 30, 40, 40]

function mostrarSuma() {
    if (ronda < 5) {
        basic.clearScreen()
        basic.showString(sumas[ronda])
        inicio = input.runningTime()
        activo = true
    } else {
        activo = false
        basic.showString("FIN")
        basic.showIcon(IconNames.Happy)
    }
}

input.onButtonPressed(Button.A, function () {
    if (activo && input.runningTime() - inicio < 10000) {
        respuesta = 0
        if (resultados[ronda] % 2 == 0) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
        basic.pause(700)
        ronda += 1
        mostrarSuma()
    }
})

input.onButtonPressed(Button.B, function () {
    if (activo && input.runningTime() - inicio < 10000) {
        respuesta = 1
        if (resultados[ronda] % 2 != 0) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
        basic.pause(700)
        ronda += 1
        mostrarSuma()
    }
})

basic.forever(function () {
    if (activo && input.runningTime() - inicio >= 10000) {
        ronda += 1
        mostrarSuma()
    }
})

mostrarSuma()
  
