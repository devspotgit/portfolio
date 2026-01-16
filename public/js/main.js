

import { projectOnScroll, projectInit, onResize, onScroll, headerControl, headerOnScroll, educationControl, jumpToSection } from "./lib.js"

onResize()

projectInit()

const onScrollCallBacks = []

onScrollCallBacks.push(headerOnScroll)

onScrollCallBacks.push(projectOnScroll)

onScroll(onScrollCallBacks)

headerControl()

educationControl()

jumpToSection()




