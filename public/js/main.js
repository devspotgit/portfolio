

import { onResize, onScroll, headerControl, headerOnScroll } from "./lib.js"

onResize()

const onScrollCallBacks = []

onScrollCallBacks.push(headerOnScroll)

onScroll(onScrollCallBacks)

headerControl()


