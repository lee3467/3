input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 2)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 55)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 1.8)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 80)
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
