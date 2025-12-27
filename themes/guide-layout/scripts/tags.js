// 1. A4 页面容器标签 {% page 页码 %} ... {% endpage %}
hexo.extend.tag.register('page', function(args, content) {
  const pageNum = args[0] || 1;
  return `<div class="page" data-page="${pageNum}">${hexo.render.renderSync({text: content, engine: 'markdown'})}</div>`;
}, {ends: true});

// 2. 提示标签 {% label 标题 %} ... {% endlabel %}
hexo.extend.tag.register('label', function(args, content) {
  const title = args[0] || '提示';
  return `<div class="highlight-bar"><strong>${title}：</strong>${content}</div>`;
}, {ends: true});

// 3. 带行号代码块 {% code 1-5 %} ... {% endcode %}
hexo.extend.tag.register('code', function(args, content) {
  const range = args[0] ? args[0].split('-') : [1, 1];
  let lines = '';
  for (let i = parseInt(range[0]); i <= parseInt(range[1]); i++) {
    lines += `<span>${i}</span>`;
  }
  return `<div class="code-wrapper">
            <div class="line-numbers">${lines}</div>
            <div class="code-content">${content}</div>
          </div>`;
}, {ends: true});