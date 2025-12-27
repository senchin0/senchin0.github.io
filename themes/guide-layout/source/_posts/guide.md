---
title: Guide Layout 样式极限压力测试
layout: index
author: Senchin0
subtitle: 深度复刻：从 HTML 到 Hexo 的低代码演进
---

{% page 2 %}
## 01. 目录与核心规范 <span class="term-en">CONTENTS & RULES</span>

<div class="toc">
    <strong>本页测试重点：</strong> A4 边距、10pt 字体、方角表格、双语标题。
</div>

### 1.1 排版规范对照表

| 项目 | 规范要求 | 测试状态 |
| :--- | :--- | :--- |
| **全局角度** | 强制 `border-radius: 0` | [ 待测 ] |
| **字体大小** | 严格 `10pt` (Word 五号字) | [ 待测 ] |
| **页面尺寸** | 210mm × 297mm (A4) | [ 待测 ] |
| **中英间距** | 术语类采用 `.term-en` 样式 | [ 待测 ] |

{% label 核心逻辑 %}
所有的外挂标签（Tags）都会自动将 Markdown 渲染为符合 A4 比例的 HTML 结构，确保在 Web 端和 PDF 导出时视觉一致。
{% endlabel %}

<div class="img-placeholder">
    [ 插图测试：此处应显示为浅灰色方格，模拟 A4 纸张中的配图区域 ]
</div>
{% endpage %}

{% page 3 %}
## 02. 环境初始化 <span class="term-en">ENVIRONMENT INIT</span>

### 2.1 自动化脚本测试
在终端执行以下命令，测试代码块的**行号对齐**与**长文本换行**：

{% code 1-5 %}
# 这是一个非常长的注释行，用来测试在 A4 窄屏宽度下，代码是否会自动换行而不会撑破容器边界导致 PDF 溢出
npm install -g hexo-cli
hexo init my_blog
cd my_blog
npm install
{% endcode %}

### 2.2 流程清单测试
1.  **准备阶段**：检查 GitHub 账号权限。
2.  **执行阶段**：
    * 克隆 `guide-layout` 到 `themes` 目录。
    * 修改 `_config.yml` 中的 `theme` 字段。
3.  **验证阶段**：执行 `hexo s` 观察控制台输出。

{% label 专家提示 %}
如果遇到权限问题，请在命令前加上 `sudo`（仅限 Linux 环境）。
{% endlabel %}
{% endpage %}

{% page 4 %}
## 03. 视觉组件压力测试 <span class="term-en">VISUAL STRESS TEST</span>

### 3.1 嵌套列表与方块引用
* **一级列表项目**
    * 二级子项目：测试缩进是否在 A4 范围内。
    * 二级子项目：测试多行文本时的行高。
* **代码块溢出测试**：
    {% code 6-8 %}
    git remote add origin https://github.com/yourname/your-very-very-long-repository-name-test.git
    git push -u origin main
    {% endcode %}

### 3.2 底部版权对齐测试
本页内容较少，可用来测试 `flex-direction: column` 状态下，页脚是否能保持在页面最底部。

<div style="height: 100px;"></div> <div class="img-placeholder" style="height: 300px;">
    [ 大图展示区域测试 ]
    <br>测试图片在占满 1/3 页面时的阴影与方角效果
</div>
{% endpage %}