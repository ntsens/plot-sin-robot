/**
 * 画正弦曲线
 */
let x = 0
let y = 0
let index = 0
writingrobot.autoHome()
let a = 20
let n = 20
let x_offset = 100
let y_offset = 100
// 画坐标轴
// 画x轴
writingrobot.moveXYZ(x_offset - 10, y_offset, -42)
writingrobot.moveXYZ(x_offset + 50, y_offset, -42)
// 抬笔
writingrobot.moveXYZ(x_offset, y_offset, 0)
// 画y轴
writingrobot.moveXYZ(x_offset, y_offset + 30, -42)
writingrobot.moveXYZ(x_offset, y_offset - 30, -42)
// 抬笔
writingrobot.moveXYZ(x_offset, y_offset, 0)
while (index <= n) {
    y = a * Math.sin(index / n * 2 * Math.PI)
    x = 2 * index
    x = x + x_offset
    y = y + y_offset
    basic.pause(300)
    writingrobot.moveXYZunblock(x, y, -42)
    index += 1
}
// 归位
writingrobot.moveXYZ(x_offset, y_offset, 0)
writingrobot.autoHome()
basic.forever(function () {
	
})
