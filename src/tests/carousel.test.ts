import { describe, it, expect, beforeEach } from "vitest"
import { Carousel } from "../Carousel"

describe('Carousel', () => {
    let carousel: Carousel
    let element: HTMLElement

    beforeEach(() => {
        element = document.createElement('div')
        element.innerHTML = `
            <div class="carousel-inner">
                <div class="carousel-item">Item 1</div>
                <div class="carousel-item">Item 2</div>
                <div class="carousel-item">Item 3</div>
            </div>
            <button class="prev">Prev</button>
            <button class="next">Next</button>
        `
        carousel = new Carousel(element)
    })

    it('should be defined', () => {
        expect(carousel).toBeDefined()
    })

    it('should init with current index 0', () => {
        expect(carousel.currentIndex).toBe(0)
    })

    it('should init with items', () => {
        expect(carousel.items).toHaveLength(3)
    })

    it('should move to next slide', () => {
        carousel.next()
        expect(carousel.currentIndex).toBe(1)
    })

    it('should move to prev slide', () => {
        carousel.next()
        carousel.prev()
        expect(carousel.currentIndex).toBe(0)
    })

    it('should loop to the first slide when reaching the end', () => {
        carousel.goTo(3)
        carousel.next()
        expect(carousel.currentIndex).toBe(1)
    })

    it('should loop to the last slide when reaching the start', () => {
        carousel.goTo(-1)
        carousel.prev()
        expect(carousel.currentIndex).toBe(1)
    })

    it('should correctly loop through all slides', () => {
        expect(carousel.currentIndex).toBe(0)  // 初始状态

        carousel.next()
        expect(carousel.currentIndex).toBe(1)  // 移动到第二张

        carousel.next()
        expect(carousel.currentIndex).toBe(2)  // 移动到第三张

        carousel.next()
        expect(carousel.currentIndex).toBe(0)  // 循环回到第一张

        carousel.next()
        expect(carousel.currentIndex).toBe(1)  // 再次移动到第二张
    })
})