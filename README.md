# Code Snippets

代码片段，记录日常编写前端的一些尝试与实践。

## 参与维护

此项目内提供的代码示例，可能会随着浏览器的功能迭代而随之改变，如果和我预期总结的内容不妥，欢迎提出宝贵 Issues，或 PR 提供最新的解决方案，谢谢！

## 内容清单

- 2022-07-22：[Flex 布局](https://dreamer-paul.github.io/Code-Snippets/2022-07-22%20Flex%20布局/)
  - 一个 100vh 高度的容器，子元素设置溢出滚动
- 2022-07-22：[获取设备摄像头和麦克风权限](https://dreamer-paul.github.io/Code-Snippets/2022-07-22%20获取设备摄像头和麦克风权限/)
  - 尝试学习使用 WebRTC API 的第一步
- 2022-08-17：[iFrame 加载失败的报错](https://dreamer-paul.github.io/Code-Snippets/2022-08-17%20iFrame%20加载失败的报错/)
  - 引入 iframe 的网页，并不能直接捕获到 iframe 内的报错，除非使用 postMessage 转发
- 2022-08-17：[iFrame 相互通信](https://dreamer-paul.github.io/Code-Snippets/2022-08-17%20iFrame%20相互通信/)
  - iframe 子和父的相互通信，使用 postMessage 和 message 事件实现
- 2022-09-02：[宽高自适应栅格](https://dreamer-paul.github.io/Code-Snippets/2022-09-02%20宽高自适应栅格/)
  - 公司项目的需求，需要某个子元素保持指定比例，且可根据数量和窗口宽度自动换行，失败的试验品
- 2022-09-05：[通知功能](https://dreamer-paul.github.io/Code-Snippets/2022-09-05%20通知功能/)
  - 使用 Notification API 发送系统级通知
- 2022-09-08：[静态拖拽轮换面板](https://dreamer-paul.github.io/Code-Snippets/2022-09-08%20静态拖拽轮换面板/)
  - 提供切换 static 和 fixed 两种模式的拖拽面板，想法是取缔原有项目使用的 [React Draggable](https://github.com/react-grid-layout/react-draggable) 库，参考文档感觉这个库的设计并不希望被切换成 static 模式
  - 目前还是半成品，拖拽逻辑实现完全，但调整宽高方面还没有持续改进
- 2022-09-23：[获取麦克风音频流并清除小红点](https://dreamer-paul.github.io/Code-Snippets/2022-09-23%20获取麦克风音频流并清除小红点/)
  - WebRTC 获取音频流时遇到的问题，必须彻底释放才会使得小红点消失
- 2022-10-10：ESLint 配置
  - 基于 AirBnb 的实现二次修改调整而成的配置
- 2022-10-24：[Mac 输入法回车问题](https://dreamer-paul.github.io/Code-Snippets/2022-10-24%20Mac%20输入法回车问题/)
  - MacOS 中文输入法回车的时候会触发某些不必要的操作，这是目前我发现运行正常的 2 个解决方案
- 2022-11-27：[带弹出动画的简单抽屉](https://dreamer-paul.github.io/Code-Snippets/2022-11-27%20带弹出动画的简单抽屉/)
  - 使用原生 JavaScript 编写的简单抽屉，配合 [这篇文章](https://paugram.com/coding/simple-drawer-react-component.html) 阅读更合适
- 2022-12-07：[截图测试](https://dreamer-paul.github.io/Code-Snippets/2022-12-07%20截图测试/)
  - 使用 html2canvas 库截图 iframe 内异步渲染的内容，果不其然是无效的，毕竟它的原理是画画，而且外部内容也无法截取
- 2022-12-09：[剪贴板测试](https://dreamer-paul.github.io/Code-Snippets/2022-12-09%20剪贴板测试/)
  - 原生方式实现复制内容到剪贴板，包含各种异步逻辑，在 iOS 上均未被阻止，但换成 React 元素 `onClick` 就遇到了问题
- 2022-12-09：[手机扬声器设备识别和操作](https://dreamer-paul.github.io/Code-Snippets/2022-12-09%20手机扬声器设备识别和操作/)
  - iOS 环境下无法检测获取扬声器设备，自然也没法实现切换的功能
- 2022-12-09：[音视频设备授权弹窗回退](https://dreamer-paul.github.io/Code-Snippets/2022-12-09%20音视频设备授权弹窗回退/)
  - 如果设备上没有视频设备，同时请求音视频会出现异常，需要降级处理
  - 公司项目使用的声网 SDK，它二次封装过相关逻辑，只要调用失败一次后面单独授权也是有异常的
- 2022-12-19：[Safari 下载文本显示按钮问题](https://dreamer-paul.github.io/Code-Snippets/2022-12-19%20Safari%20下载文本显示按钮问题/)
  - 另存为文本内容为 `txt` 文件，发现在 iOS 设备上直接打开会变成乱码展示，目前暂无解决方案
- 2023-01-10：[聚焦到 iFrame 窗口内](https://dreamer-paul.github.io/Code-Snippets/2023-01-10%20聚焦到%20iFrame%20窗口内/)
  - 如何在 `iframe` 外部点击操作，将焦点聚焦到里面的编辑框
  - 如果点击的元素消失，可能会导致 `focus` 效果失效
- 2023-01-10：[模拟 Enter 事件](https://dreamer-paul.github.io/Code-Snippets/2023-01-10%20模拟%20Enter%20事件/)
- 2023-01-13：[输入框透明样式问题](https://dreamer-paul.github.io/Code-Snippets/2023-01-13%20输入框透明样式问题/)
  - 苹果设备 Safari 上输入框的奇怪现象，塌陷效果竟然会和背景颜色有关系
  - 模拟一个 Enter 事件，并传达给使用 `keydown` 事件监听的元素
- 2023-01-31：[音视频设备授权等级降级检测](https://dreamer-paul.github.io/Code-Snippets/2023-01-31%20音视频设备授权等级降级检测/)
  - 继「音视频设备授权弹窗回退」Demo 后，发现设备获取失败的错误原因有三类，需要分别给予用户不同的提示
- 2023-02-01：[录制屏幕授权](https://dreamer-paul.github.io/Code-Snippets/2023-02-01%20录制屏幕授权/)
  - MacOS 下浏览器需要提供对应的录制权限，用户取消和系统无权限分别会得到两条不同的错误提示
- 2023-02-02：[切换 iFrame 的容器是否会导致刷新](https://dreamer-paul.github.io/Code-Snippets/2023-02-02%20切换%20iFrame%20的容器是否会导致刷新/)
  - 答案是不能，DOM 刷新了意味着 iFrame 内部必须被刷新一次，除了使用 fixed 还有什么别的方法了呢？
- 2023-02-02：[切换扬声器功能](https://dreamer-paul.github.io/Code-Snippets/2023-02-02%20切换扬声器功能/)
  - 可以切换扬声器，但只能针对每一个媒体对象做操作
- 2023-02-17：[新窗口打开被浏览器阻止](https://dreamer-paul.github.io/Code-Snippets/2023-02-17%20新窗口打开被浏览器阻止/)
  - 触发浏览器打开新窗口会被阻止的场景
- 2023-03-03：[iOS Safari 无声音问题排查](https://dreamer-paul.github.io/Code-Snippets/2023-03-03%20iOS%20Safari%20无声音问题排查/)
  - 记录 iOS 15 Safari 没声音的一些问题
- 2023-03-13：[自适应等比缩放](https://dreamer-paul.github.io/Code-Snippets/2023-03-13%20自适应等比缩放/)
  - 自适应根据 Flex 高度实现等比缩放的块元素
- 2023-04-04：[左右滑动手势](https://dreamer-paul.github.io/Code-Snippets/2023-04-04%20左右滑动手势/)
  - 根据设备类型绑定事件，实现左右滑动手势执行操作
- 2023-06-01：[Safari 屏幕录制](https://dreamer-paul.github.io/Code-Snippets/2023-06-01%20Safari%20屏幕录制/)
  - Safari 浏览器下，如果先请求异步操作（超过 1000 ms）后再获取视频流，会导致无法成功获取
- 2023-06-09：[Canvas 压缩图片分辨率](https://dreamer-paul.github.io/Code-Snippets/2023-06-09%20Canvas%20压缩图片分辨率/)
  - 使用浏览器的原生 Canvas 实现图片分辨率的压缩，如果原图尺寸过大，将会产生锯齿的现象
- 2023-07-26：[音频流热更新](https://dreamer-paul.github.io/Code-Snippets/2023-07-26%20音频流热更新/)
  - 尝试在一条音频流上处理切换设备（切换音频轨道）的逻辑
- 2023-08-18：[获取音频选项测试](https://dreamer-paul.github.io/Code-Snippets/2023-08-18%20获取音频选项测试/)
  - 勾选不同选项并试听差别，对比下最终的音频质量
- 2023-09-06：[原生转录测试](https://dreamer-paul.github.io/Code-Snippets/2023-09-06%20原生转录测试/)
  - 测试使用浏览器原生支持的语音转文字功能

## 开源协议

本项目采用 MIT 开源协议进行授权，如果项目内的代码对你有所帮助，请 `Star` 它以示对我的支持~

如果使用相关内容进行二次创作，请务必标记来源，感谢理解！

同时欢迎前往 [我的小窝](https://paul.ren/donate) 为我提供赞助，谢谢您！
