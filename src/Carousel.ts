import { CarouselOptions } from "./types";

export class Carousel {
    // 轮播图容器元素
    private element: HTMLElement;
    // 轮播图配置选项
    private options: CarouselOptions;
    // 当前显示的幻灯片索引
    currentIndex: number = 0;
    // 所有幻灯片元素数组
    items: HTMLElement[];
    // 自动播放的定时器ID
    private intervalId: number | null = null;

    /**
     * 创建一个新的Carousel实例
     * @param element 轮播图容器元素
     * @param options 轮播图配置选项
     */
    constructor(element: HTMLElement, options: CarouselOptions = {}) {
        this.element = element;
        this.options = {
            ...this.getDefaultOptions(),
            ...options
        };
        this.items = Array.from(this.element.querySelectorAll('.carousel-item'));
        this.init();
    }

    /**
     * 初始化轮播图容器样式
     */
    private init() {
        // TODO: 添加样式
        this.element.style.position = 'relative';
        this.element.style.overflow = 'hidden';
        this.element.style.width = '200px';
        this.element.style.height = '100px';
    }

    /**
     * 获取默认的轮播图配置选项
     * @returns 默认的CarouselOptions对象
     */
    getDefaultOptions(): CarouselOptions {
        return {
            autoPlay: true,
            autoPlayInterval: 3000,
            autoPlayDirection: 'forward',
            autoPlayLoop: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            touchEnabled: true,
            mouseEnabled: true,
            keyboardEnabled: true,
        };
    }

    /**
     * 设置轮播图的事件监听器
     */
    setupEventListeners() {
        const prev = this.element.querySelector('.prev')
        const next = this.element.querySelector('.next')
        if (prev) {
            prev.addEventListener('click', () => this.prev())
        }
        if (next) {
            next.addEventListener('click', () => this.next())
        }
    }

    /**
     * 切换到上一张幻灯片
     */
    prev() {
        this.goTo(this.currentIndex - this.options.slidesToScroll!);
    }

    /**
     * 切换到下一张幻灯片
     */
    next() {
        this.goTo(this.currentIndex + this.options.slidesToScroll!);
    }

    /**
     * 跳转到指定索引的幻灯片
     * @param index 目标幻灯片的索引
     */
    goTo(index: number) {
        const totalSlides = this.items.length;
        if (this.options.autoPlayLoop) {
            index = (index + totalSlides) % totalSlides;
            console.log('index', index)
        } else {
            index = Math.max(0, Math.min(index, totalSlides - this.options.slidesToShow!));
        }
        this.currentIndex = index;
        this.updateSlides();
    }
    

    /**
     * 更新幻灯片的显示状态
     */
    private updateSlides() {
        this.items.forEach((item, index) => {
            const offset = index - this.currentIndex;
            const isVisible = offset >= 0 && offset < this.options.slidesToShow!;
            item.style.display = isVisible ? 'block' : 'none';
        });
    }

    /**
     * 开始自动播放
     */
    private startAutoPlay() {
        if (this.intervalId) {
            this.stopAutoPlay();
            return;
        }
        this.intervalId = setInterval(() => {
            this.next();
        }, this.options.autoPlayInterval!);
    }

    /**
     * 停止自动播放
     */
    private stopAutoPlay() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}