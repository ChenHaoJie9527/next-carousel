export interface CarouselOptions {
    // 是否启用自动播放
    autoPlay?: boolean;
    // 自动播放的时间间隔（毫秒）
    autoPlayInterval?: number;
    // 自动播放的方向：向前或向后
    autoPlayDirection?: 'forward' | 'backward';
    // 是否循环播放
    autoPlayLoop?: boolean;
    // 是否反向播放
    autoPlayReverse?: boolean;
    // 鼠标悬停时是否停止自动播放
    autoPlayStopOnHover?: boolean;
    // 点击时是否停止自动播放
    autoPlayStopOnClick?: boolean;
    // 鼠标进入时是否停止自动播放
    autoPlayStopOnMouseEnter?: boolean;
    // 鼠标离开时是否停止自动播放
    autoPlayStopOnMouseLeave?: boolean;
    // 鼠标移动时是否停止自动播放
    autoPlayStopOnMouseMove?: boolean;
    // 鼠标移出时是否停止自动播放
    autoPlayStopOnMouseOut?: boolean;
    // 鼠标悬停时是否停止自动播放
    autoPlayStopOnMouseOver?: boolean;
    // 鼠标按钮释放时是否停止自动播放
    autoPlayStopOnMouseUp?: boolean;
    // 自动播放的时间间隔（毫秒）
    interval?: number;
    // 显示的幻灯片数量
    slidesToShow?: number;
    // 每次滚动的幻灯片数量
    slidesToScroll?: number;
    // 是否启用触摸滑动
    touchEnabled?: boolean;
    // 是否启用鼠标滑动
    mouseEnabled?: boolean;
    // 是否启用键盘滑动
    keyboardEnabled?: boolean;
    // 默认显示的幻灯片索引
    defaultCurrentIndex?: number;
}