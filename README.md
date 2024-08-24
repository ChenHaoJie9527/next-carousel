# Carousel Library

一个使用 TypeScript 和 Vite 构建的现代化、轻量级的轮播图库。

## 特性

- 使用 TypeScript 编写，提供良好的类型支持
- 支持自动播放
- 可配置的循环播放
- 自定义滑动数量和显示数量
- 响应式设计
- 易于集成和使用

## 安装

使用 npm 安装:

```bash
npm install carousel-library
```

## 使用方法
首先，在你的 HTML 中创建轮播图的基本结构：
```html
<div id="carousel">
  <div class="carousel-inner">
    <div class="carousel-item">Slide 1</div>
    <div class="carousel-item">Slide 2</div>
    <div class="carousel-item">Slide 3</div>
  </div>
  <button class="prev">&lt;</button>
  <button class="next">&gt;</button>
</div>
```

然后，在你的 JavaScript 或 TypeScript 文件中：

```javascript
import Carousel from 'carousel-library';

const carousel = new Carousel(document.getElementById('carousel'), {
  autoplay: true,
  interval: 3000,
  loop: true,
  slidesToShow: 1,
  slidesToScroll: 1
});
```

## 配置选项

你可以通过传递一个配置对象来自定义轮播图的行为：

autoplay (boolean): 是否自动播放。默认为 true。
interval (number): 自动播放的间隔时间（毫秒）。默认为 3000。
loop (boolean): 是否循环播放。默认为 true。
slidesToShow (number): 同时显示的幻灯片数量。默认为 1。
slidesToScroll (number): 每次滚动的幻灯片数量。默认为 1。

## API

next(): 切换到下一张幻灯片
prev(): 切换到上一张幻灯片
goTo(index: number): 切换到指定索引的幻灯片

## 开发

克隆仓库:

```bash
git clone https://github.com/yourusername/carousel-library.git
cd carousel-library
安装依赖:
bashCopynpm install
运行开发服务器:
bashCopynpm run dev
运行测试:
bashCopynpm test
构建库:
bashCopynpm run build

## 贡献
欢迎贡献！请阅读 CONTRIBUTING.md 了解如何为这个项目做出贡献。
## 许可证
本项目采用 MIT 许可证。查看 LICENSE 文件了解更多信息。