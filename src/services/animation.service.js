const AnimationService = {
  asyncAnimate(animation, delay, duration) {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          if(!duration && animation()) {
            clearInterval(interval)
            resolve()
          } else if(duration) {
            animation()
          }
        }, delay)
        if(duration) {
          setTimeout(() => {
            clearInterval(interval)
            resolve()
          }, duration)
        }
    })
  }
}

export default AnimationService