const root = document.documentElement;
const body = document.body;
const page = body.dataset.page || 'home';
const savedTheme = localStorage.getItem('fk-theme') || 'light';
const storedLang = localStorage.getItem('fk-lang');
const browserLang = ((navigator.languages && navigator.languages[0]) || navigator.language || 'en').toLowerCase();
const savedLang = storedLang || (browserLang.startsWith('zh') ? 'zh' : 'en');
root.setAttribute('data-theme', savedTheme);

const translations = {
  common: {
    home:{en:'Home',zh:'首页'}, work:{en:'Research & Projects',zh:'研究与项目'}, about:{en:'About',zh:'关于'}, connect:{en:'Connect',zh:'联系'}, theme:{en:'Light / Dark',zh:'浅色 / 深色'}, lang:{en:'EN / 简',zh:'简 / EN'}, cv:{en:'CV',zh:'简历'}, copy:{en:'Copy',zh:'复制'}, copied:{en:'Copied',zh:'已复制'}, copiedToast:{en:'Copied to clipboard',zh:'已复制到剪贴板'}, cvPreview:{en:'CV Preview',zh:'简历预览'}, openPdf:{en:'Open PDF',zh:'打开 PDF'}, downloadPdf:{en:'Download',zh:'下载'}, close:{en:'Close',zh:'关闭'}, copyright:{en:'Copyright © 2026 Frederick Khasanto',zh:'版权 © 2026 Frederick Khasanto'}
  },
  home: {
    kicker:{en:'PhD Researcher · Intelligent Transportation · HKUST (Guangzhou)',zh:'博士研究生 · 智能交通 · 香港科技大学（广州）'},
    title:{en:'I use <em>data</em> and <em>machine learning</em> to understand transportation systems.',zh:'我用<em>数据</em>和<em>机器学习</em>来理解交通系统。'},
    intro:{en:'I’m Frederick Khasanto, a PhD student in Intelligent Transportation at HKUST (Guangzhou), advised by Prof. Benedict Jun MA. Before starting my PhD, I studied Data Science and Big Data Technology at CUHK Shenzhen and worked on language, multimodal AI, and applied machine-learning projects.',zh:'我是 Frederick Khasanto，目前在香港科技大学（广州）攻读智能交通博士学位，由 Benedict Jun MA 教授指导。在开始博士阶段之前，我在香港中文大学（深圳）学习数据科学与大数据技术，并参与过语言、多模态 AI 和应用机器学习项目。'},
    viewWork:{en:'Explore research',zh:'探索研究'}, aboutMe:{en:'About Frederick',zh:'关于 Frederick'}, based:{en:'Current program',zh:'当前项目'}, basedV:{en:'PhD · Intelligent Transportation',zh:'博士 · 智能交通'}, degree:{en:'Advisor',zh:'导师'}, degreeV:{en:'Prof. Benedict Jun MA',zh:'Benedict Jun MA 教授'}, cgpa:{en:'Previous degree',zh:'此前学位'},
    avatarQ:{en:'Curious about something?',zh:'想了解点什么？'}, avatarD:{en:'Pick a topic and I’ll give you the short version.',zh:'选一个主题，我用简短的方式告诉你。'}, optWork:{en:'Research & Projects',zh:'研究与项目'}, optTeach:{en:'Teaching',zh:'教学'}, optAbout:{en:'Background',zh:'背景'}, optConnect:{en:'Connect',zh:'联系'},
    teachK:{en:'Teaching',zh:'教学'}, teachT:{en:'Teaching is part of how I learn.',zh:'教学也是我学习的一部分。'}, teachP:{en:'My teaching roles progressed from introductory programming to applied machine learning and probability & statistics.',zh:'我的教学经历从编程导论逐步扩展到应用机器学习以及概率统计。'},
    t1title:{en:'Probability and Statistics II',zh:'概率与统计 II'}, t1body:{en:'I led tutorials on estimation, hypothesis testing, and order statistics, and also helped students prepare for exams.',zh:'我负责估计、假设检验和次序统计量等内容的辅导，也会帮助学生准备考试。'},
    t2title:{en:'Probability and Statistics II',zh:'概率与统计 II'}, t2body:{en:'I ran weekly tutorials on topics like Chi-square tests, ANOVA, linear regression, and likelihood ratio tests, and I also helped design homework assignments.',zh:'我每周带卡方检验、方差分析、线性回归和似然比检验等内容的辅导课，也参与了作业设计。'},
    t3title:{en:'Applied Machine Learning',zh:'应用机器学习'}, t3body:{en:'I held office hours and worked through questions with students when they needed help understanding the course material.',zh:'我通过答疑时间和学生一起梳理问题，帮助他们理解课程内容。'},
    t4title:{en:'Introduction to Programming Methodology',zh:'编程方法导论'}, t4body:{en:'I led weekly Python tutorials, prepared problem sets and live-coding examples, and gave students feedback on their assignments.',zh:'我每周带 Python 辅导课，准备练习题和现场编码示例，也会给学生的作业提供反馈。'}
  },
  work: {
    kicker:{en:'Research & Projects',zh:'研究与项目'}, title:{en:'Research, past work, and what I’m building toward.',zh:'研究经历、过去的工作，以及我正在走向的方向。'}, intro:{en:'I’m currently beginning a PhD in Intelligent Transportation at HKUST (Guangzhou), advised by Prof. Benedict Jun MA. This builds on my earlier work in language and multimodal AI, as well as projects where I used machine learning to solve practical problems.',zh:'我目前在香港科技大学（广州）开始智能交通博士阶段，由 Benedict Jun MA 教授指导。这一方向建立在我此前语言与多模态 AI 研究以及应用机器学习项目经历之上。'},
    statementKicker:{en:'Research perspective',zh:'研究视角'}, statementText:{en:'As my doctoral work develops, I’m interested in how data and machine learning can help reveal patterns in transportation systems and support better decisions.',zh:'随着博士研究逐步展开，我希望探索数据与机器学习如何帮助我们理解交通系统中的规律，并为更好的决策提供支持。'},
    r1date:{en:'Sep 2025 — Present',zh:'2025年9月 — 至今'}, r1place:{en:'CUHK(SZ)',zh:'香港中文大学（深圳）'}, r1role:{en:'Research Assistant',zh:'科研助理'}, r1title:{en:'Offensive Speech Detection',zh:'冒犯性言论检测'}, r1body:{en:'Right now, I’m working with Prof. Benyou Wang’s research group on offensive-speech detection. My role focuses on reviewing transformer-based hate-speech research and organizing existing datasets for supervised classification.',zh:'目前，我在 Benyou Wang 教授课题组参与冒犯性言论检测研究。我的工作主要是阅读基于 Transformer 的仇恨言论检测研究，并整理用于监督分类的现有数据集。'},
    r2date:{en:'Jul — Aug 2025',zh:'2025年7月 — 8月'}, r2place:{en:'UC Santa Cruz · VLAA Lab',zh:'加州大学圣克鲁兹分校 · VLAA 实验室'}, r2role:{en:'Summer Research Intern',zh:'暑期科研实习生'}, r2title:{en:'Vision-Language Models',zh:'视觉语言模型'}, r2body:{en:'During my summer internship at the VLAA Lab, UC Santa Cruz, I studied vision-language models and multimodal architectures such as LLaVA and LLaVA-CoT under the supervision of Hardy Chen and Prof. Cihang Xie.',zh:'在加州大学圣克鲁兹分校 VLAA Lab 的暑期科研期间，我在 Hardy Chen 和 Cihang Xie 教授指导下学习了视觉语言模型以及 LLaVA、LLaVA-CoT 等多模态架构。'},
    projTitle:{en:'Selected Project Work',zh:'精选项目'}, visualNote:{en:'The first four projects below use visuals and previewable PDFs from Frederick’s actual project reports. Group-project credits are preserved in the case studies and reports.',zh:'下面前四个项目使用 Frederick 实际项目报告中的视觉内容，并提供站内 PDF 预览。案例与报告中保留了小组项目署名。'}, repVisual:{en:'Project report visual',zh:'项目报告视觉'},
    p1title:{en:'Diffusion Models for X-ray Image Generation',zh:'用于 X 光图像生成的扩散模型'}, p1body:{en:'A four-person Deep Learning project comparing an unconditional DDPM with DiNO-conditioned latent diffusion for chest X-ray synthesis.',zh:'一个四人深度学习项目，对比无条件 DDPM 与 DiNO 条件潜空间扩散模型在胸部 X 光生成上的表现。'},
    p4title:{en:'Evaluation of LLMs on Jailbreak & Adversarial Attacks',zh:'大语言模型越狱与对抗攻击评估'}, p4body:{en:'A two-person CSC4100 project evaluating LLaMA, Qwen, and Mistral across 100 jailbreak prompts spanning six attack categories.',zh:'一个两人 CSC4100 项目，使用 100 条、涵盖六类攻击方式的越狱提示评估 LLaMA、Qwen 与 Mistral。'},
    p5title:{en:'RAG System for Internal Knowledge Management',zh:'内部知识管理 RAG 系统'}, p5body:{en:'A CUHK(SZ) capstone project building a multilingual, source-grounded RAG chatbot over internal Notion PDF documentation.',zh:'港中深毕业项目：围绕内部 Notion PDF 文档构建支持多语言、可追溯来源的 RAG 聊天机器人。'},
    p6title:{en:'Online Linear Programming & Resource Allocation',zh:'在线线性规划与资源分配'}, p6body:{en:'A two-person DDA4300 optimization final project comparing online allocation algorithms against an offline LP benchmark across 10,000 simulated bidders.',zh:'一个两人 DDA4300 优化课程期末项目，在 10,000 个模拟竞标者上将多种在线资源分配算法与离线 LP 最优基准进行比较。'},
    p2title:{en:'KnowYourBody',zh:'KnowYourBody'}, p2body:{en:'I built KnowYourBody as an AI practicum project, using LLM APIs to create a web app for educational and personalized health analytics.',zh:'我在 AI 实践项目中开发了 KnowYourBody，利用 LLM API 做了一个面向教育与个性化健康分析的网页应用。'},
    p3title:{en:'SmartBot: Cloud-based Clinic Appointment Chatbot',zh:'SmartBot：云端门诊预约聊天机器人'}, p3body:{en:'For a Cloud Computing project, I built SmartBot, a clinic appointment chatbot using AWS Cloud Functions.',zh:'在云计算项目中，我开发了 SmartBot，一个使用 AWS Cloud Functions 构建的门诊预约聊天机器人。'}, navDoctoral:{en:'Doctoral Direction',zh:'博士方向'}, navQuestions:{en:'Research Questions',zh:'研究问题'}, navPrevious:{en:'Previous Research',zh:'过往研究'}, navProjects:{en:'Projects',zh:'项目'}, navPublications:{en:'Publications',zh:'论文'}, questionsKicker:{en:'Selected Research Questions',zh:'精选研究问题'}, questionsTitle:{en:'Questions I’m interested in exploring as my doctoral work develops.',zh:'随着博士研究展开，我希望进一步探索的问题。'}, questionsIntro:{en:'These are broad directions rather than fixed dissertation claims. They reflect how I’m currently thinking about the intersection of transportation, data, and machine learning.',zh:'这些是目前感兴趣的宽泛方向，并不是已经确定的博士论文题目。它们反映了我现在对交通、数据与机器学习交叉问题的思考。'}, q1:{en:'How can data-driven models help us understand patterns and behavior in transportation systems?',zh:'数据驱动模型如何帮助我们理解交通系统中的模式与行为？'}, q2:{en:'How can machine learning support transportation decisions while remaining interpretable and reliable?',zh:'机器学习如何在保持可解释性与可靠性的同时支持交通决策？'}, q3:{en:'Which ideas from data science and modern AI transfer meaningfully to real transportation problems?',zh:'数据科学与现代 AI 中的哪些方法能够真正迁移到现实交通问题中？'}
  },
  about: {
    profile:{en:'Profile',zh:'个人简介'}, title:{en:'About Me',zh:'关于我'}, p1:{en:'I’m currently pursuing a PhD in Intelligent Transportation at The Hong Kong University of Science and Technology (Guangzhou), advised by Prof. Benedict Jun MA. Before starting my PhD, I studied Data Science and Big Data Technology at CUHK Shenzhen, where I built a strong foundation in statistics and machine learning.',zh:'我目前在香港科技大学（广州）攻读智能交通博士学位，由 Benedict Jun MA 教授指导。在开始博士阶段之前，我在香港中文大学（深圳）学习数据科学与大数据技术，并在统计学与机器学习方面打下了扎实基础。'}, p2:{en:'A lot of my recent work has been around language and multimodal AI. I’m now working on offensive-speech detection at CUHK(SZ), and before that I spent a summer at UC Santa Cruz learning more about vision-language models and multimodal architectures.',zh:'我最近不少工作都围绕语言和多模态 AI 展开。目前我在港中深参与冒犯性言论检测研究；在此之前，我也曾在加州大学圣克鲁兹分校做暑期科研，学习视觉语言模型和多模态架构。'}, p3:{en:'I also really enjoy teaching. I’ve worked as an undergraduate teaching fellow in programming, applied machine learning, and probability & statistics, which has been a great way to strengthen my own understanding while helping other students.',zh:'我也很喜欢教学。我曾担任编程、应用机器学习以及概率统计课程的本科生教学助理。对我来说，教学既是在帮助其他同学，也让我自己对这些内容理解得更扎实。'}, p4:{en:'Outside the classroom and lab, I’ve been involved in student leadership and academic service. I enjoy work that brings together technical depth, collaboration, and something genuinely useful for people.',zh:'除了课堂和实验室，我也参与学生领导与学术服务。我很喜欢那些既需要技术深度，又需要合作，并且最终能真正对人有帮助的事情。'},
    timeline1:{en:'Built a foundation in statistics, machine learning, programming, and data-driven problem solving at CUHK Shenzhen.',zh:'在香港中文大学（深圳）学习期间，逐步建立了统计学、机器学习、编程与数据驱动问题分析方面的基础。'}, timeline2:{en:'Studied vision-language models and multimodal architectures, including LLaVA and LLaVA-CoT, at the VLAA Lab.',zh:'在 VLAA Lab 学习视觉语言模型和多模态架构，包括 LLaVA 与 LLaVA-CoT。'}, timeline3:{en:'Beginning doctoral research in Intelligent Transportation at HKUST (Guangzhou) under the supervision of Prof. Benedict Jun MA.',zh:'在 Benedict Jun MA 教授指导下，于香港科技大学（广州）开始智能交通方向的博士研究。'},
    atGlance:{en:'Research at a glance',zh:'研究概览'}, b1h:{en:'Offensive Speech Detection:',zh:'冒犯性言论检测：'}, b1:{en:'Transformer-based hate-speech detection literature review and dataset collection.',zh:'围绕基于 Transformer 的仇恨言论检测进行文献综述与数据集整理。'}, b2h:{en:'Vision-Language Models:',zh:'视觉语言模型：'}, b2:{en:'Multimodal architectures such as LLaVA and LLaVA-CoT through the VLAA Lab at UC Santa Cruz.',zh:'在加州大学圣克鲁兹分校 VLAA Lab 调研 LLaVA 与 LLaVA-CoT 等多模态架构。'}, b3h:{en:'Teaching & Mentoring:',zh:'教学与指导：'}, b3:{en:'Teaching experience across programming, applied machine learning, and probability & statistics.',zh:'在编程、应用机器学习与概率统计课程中积累教学与辅导经验。'}, viewResearch:{en:'View full research profile →',zh:'查看完整研究经历 →'},
    featured:{en:'Featured work',zh:'精选项目'}, fp1title:{en:'Diffusion Models for X-ray Image Generation',zh:'用于 X 光图像生成的扩散模型'}, fp1body:{en:'Compared DDPM and DiNO-conditioned diffusion for chest X-ray synthesis; the report records a coarse small-sample FID improvement from 324.44 to 2.54.',zh:'比较 DDPM 与 DiNO 条件扩散模型进行胸部 X 光生成；报告记录的粗略小样本 FID 从 324.44 降至 2.54。'}, fp2title:{en:'RAG System for Internal Knowledge Management',zh:'内部知识管理 RAG 系统'}, fp2body:{en:'A capstone RAG system over internal Notion PDFs, combining document ingestion, vector retrieval, grounded generation, and a multilingual chat interface.',zh:'一个面向内部 Notion PDF 的毕业设计 RAG 系统，整合文档摄取、向量检索、基于来源的生成与多语言聊天界面。'}, viewAll:{en:'View all research & projects →',zh:'查看全部研究与项目 →'},
    edu:{en:'Education',zh:'教育背景'}, eduB:{en:'<strong>PhD in Intelligent Transportation</strong>, The Hong Kong University of Science and Technology (Guangzhou), 2026–present.<br>Advised by Prof. Benedict Jun MA.<br><br><strong>B.Sc. in Data Science and Big Data Technology</strong>, CUHK Shenzhen (Sept 2022 – Jun 2026), CGPA 3.79 / 4.00.',zh:'<strong>智能交通博士</strong>，香港科技大学（广州），2026年至今。<br>导师：Benedict Jun MA 教授。<br><br><strong>数据科学与大数据技术学士</strong>，香港中文大学（深圳）（2022年9月—2026年6月），CGPA 3.79 / 4.00。'}, skills:{en:'Technical Skills',zh:'技术技能'}, skillsB:{en:'Python, R, C++, SQL, PyTorch, Scikit-learn, Pandas, NumPy, Git, and LaTeX.',zh:'Python、R、C++、SQL、PyTorch、Scikit-learn、Pandas、NumPy、Git 与 LaTeX。'}, awards:{en:'Awards',zh:'奖项荣誉'}, awardsB:{en:'Dean’s List (2023–2025), Excellent Student Leader Award (2025), Outstanding Leadership Award (2024, 2025), and multiple scholarships.',zh:'院长名单（2023–2025）、优秀学生领袖奖（2025）、杰出领导力奖（2024、2025）以及多项奖学金。'}
  },
  connect: {
    kicker:{en:'Connect',zh:'联系'}, degree:{en:'PhD in Intelligent Transportation · HKUST (Guangzhou) · 2026–present',zh:'智能交通博士 · 香港科技大学（广州）· 2026年至今'}, bio1:{en:'I’m a PhD student in Intelligent Transportation at HKUST (Guangzhou), advised by Prof. Benedict Jun MA. My background is in data science and machine learning, with earlier research experience in language and multimodal AI.',zh:'我目前在香港科技大学（广州）攻读智能交通博士学位，由 Benedict Jun MA 教授指导。我的背景是数据科学与机器学习，也有语言和多模态 AI 方面的研究经历。'}, bio2:{en:'For research collaboration, academic opportunities, or a technical project, email is the best option. WhatsApp is fine for a quick hello, while LinkedIn and GitHub are useful if you want a little more context first.',zh:'如果是科研合作、学术机会或技术项目，邮件是最合适的联系方式。想简单打个招呼可以用 WhatsApp；如果想先了解更多背景，也可以看看 LinkedIn 和 GitHub。'}, whatsapp:{en:'Good for a quick hello or a short question.',zh:'适合快速打个招呼或问个简单问题。'}, instagram:{en:'A more casual look at student life and everyday moments.',zh:'这里更多是学生生活和日常的一面。'}, email:{en:'Best if you want to talk about research, academic work, or a possible collaboration.',zh:'如果想聊研究、学术工作或合作，邮件会更合适。'}, linkedin:{en:'Where I keep my academic and professional updates in one place.',zh:'我会在这里整理学术与职业方面的动态。'}, github:{en:'Code and technical work from class projects and machine-learning experiments.',zh:'这里放一些课程项目和机器学习实验里的代码与技术工作。'}
  }
};

function currentLang(){ return localStorage.getItem('fk-lang') || 'en'; }
function translate(key,lang=currentLang()){ const [scope,name]=key.split('.'); return translations[scope]?.[name]?.[lang] ?? ''; }
function applyLanguage(lang){ localStorage.setItem('fk-lang',lang);document.dispatchEvent(new Event('languagechange-fk')); document.querySelectorAll('[data-i18n]').forEach(el=>{ const value=translate(el.dataset.i18n,lang); if(!value)return; if(el.dataset.i18nHtml==='true')el.innerHTML=value; else el.textContent=value; }); root.lang=lang==='zh'?'zh-CN':'en'; const b=document.getElementById('langToggle'); if(b)b.textContent=translations.common.lang[lang]; }
function bindTheme(){ const btn=document.getElementById('themeToggle'); if(!btn)return; btn.addEventListener('click',()=>{ const next=root.getAttribute('data-theme')==='dark'?'light':'dark'; root.setAttribute('data-theme',next); localStorage.setItem('fk-theme',next); }); }
function bindLanguage(){ const btn=document.getElementById('langToggle'); if(!btn)return; btn.addEventListener('click',()=>{ const next=currentLang()==='en'?'zh':'en'; applyLanguage(next); updateAvatarResponse(activeAvatarTopic); syncCvModalLanguage(); syncPremiumLanguage(); syncProjectReportPreviewLanguage(); sync404Language(); }); }
function bindNavigation(){ const pageMap={home:'index.html',work:'research.html',about:'about.html',connect:'connect.html'}; document.querySelectorAll('.top-nav a').forEach(link=>{ if(link.getAttribute('href')===pageMap[page]){link.classList.add('active');link.setAttribute('aria-current','page');} }); }
function ensureToast(){
  let toast=document.getElementById('siteToast');
  if(toast)return toast;
  toast=document.createElement('div');
  toast.id='siteToast';
  toast.className='site-toast';
  toast.setAttribute('role','status');
  toast.setAttribute('aria-live','polite');
  document.body.appendChild(toast);
  return toast;
}
function showToast(message){
  const toast=ensureToast();
  toast.textContent=message;
  toast.classList.remove('show');
  void toast.offsetWidth;
  toast.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer=setTimeout(()=>toast.classList.remove('show'),1800);
}
function bindCopyButtons(){
  document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{
    const value=btn.dataset.copy||'';
    try{await navigator.clipboard.writeText(value);}catch(_){const ta=document.createElement('textarea');ta.value=value;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();}
    showToast(translations.common.copiedToast[currentLang()]);
    btn.classList.add('copied');
    setTimeout(()=>btn.classList.remove('copied'),700);
  }));
}

function ensureCvModal(){
  let modal=document.getElementById('cvPreviewModal');
  if(modal)return modal;
  modal=document.createElement('div');
  modal.id='cvPreviewModal';modal.className='cv-modal';modal.setAttribute('aria-hidden','true');
  modal.innerHTML=`<div class="cv-modal-backdrop" data-cv-close></div><section class="cv-modal-panel" role="dialog" aria-modal="true" aria-labelledby="cvModalTitle"><div class="cv-modal-head"><div><span class="cv-modal-kicker">CV Preview</span><h2 id="cvModalTitle">Frederick Khasanto</h2><div class="cv-modal-meta" data-cv-meta>Updated Sep 2026 · Academic CV · PDF</div></div><button class="cv-modal-close" type="button" data-cv-close aria-label="Close">×</button></div><div class="cv-doc-tabs"><button class="cv-doc-tab active" type="button" data-cv-file="Frederick_Academic_CV.pdf" data-cv-type="academic">Academic CV</button><button class="cv-doc-tab" type="button" data-cv-file="Frederick_Research_Profile.pdf" data-cv-type="profile">Research Profile</button></div><div class="cv-modal-frame-wrap"><iframe class="cv-modal-frame" src="Frederick_Academic_CV.pdf#view=FitH" title="Frederick Khasanto CV preview"></iframe></div><div class="cv-modal-actions"><a class="secondary-btn" href="Frederick_Academic_CV.pdf" target="_blank" rel="noopener" data-cv-open>Open PDF</a><a class="primary-btn" href="Frederick_Academic_CV.pdf" download data-cv-download>Download</a></div></section>`;
  document.body.appendChild(modal);
  modal.querySelectorAll('[data-cv-close]').forEach(el=>el.addEventListener('click',closeCvModal));
  modal.querySelectorAll('[data-cv-file]').forEach(btn=>btn.addEventListener('click',()=>{
    modal.querySelectorAll('[data-cv-file]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
    const file=btn.dataset.cvFile;modal.querySelector('.cv-modal-frame').src=`${file}#view=FitH`;modal.querySelector('[data-cv-open]').href=file;modal.querySelector('[data-cv-download]').href=file;const lang=currentLang();const kind=btn.dataset.cvType==='profile'?(lang==='zh'?'研究简介':'Research Profile'):(lang==='zh'?'学术简历':'Academic CV');const meta=modal.querySelector('[data-cv-meta]');if(meta)meta.textContent=`${lang==='zh'?'更新于 2026年9月':'Updated Sep 2026'} · ${kind} · PDF`;
  }));
  return modal;
}
function syncCvModalLanguage(){
  const modal=document.getElementById('cvPreviewModal');if(!modal)return;const lang=currentLang();
  modal.querySelector('.cv-modal-kicker').textContent=translations.common.cvPreview[lang];
  modal.querySelector('[data-cv-open]').textContent=translations.common.openPdf[lang];
  modal.querySelector('[data-cv-download]').textContent=translations.common.downloadPdf[lang];
  modal.querySelector('.cv-modal-close').setAttribute('aria-label',translations.common.close[lang]);
  const tabs=modal.querySelectorAll('[data-cv-file]');if(tabs.length===2){tabs[0].textContent=lang==='zh'?'学术简历':'Academic CV';tabs[1].textContent=lang==='zh'?'研究简介':'Research Profile';} const active=modal.querySelector('[data-cv-file].active');const meta=modal.querySelector('[data-cv-meta]');if(meta){const kind=active?.dataset.cvType==='profile'?(lang==='zh'?'研究简介':'Research Profile'):(lang==='zh'?'学术简历':'Academic CV');meta.textContent=`${lang==='zh'?'更新于 2026年9月':'Updated Sep 2026'} · ${kind} · PDF`; }
}
function openCvModal(){
  const modal=ensureCvModal();
  syncCvModalLanguage();
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  setTimeout(()=>modal.querySelector('.cv-modal-close')?.focus(),20);
}
function closeCvModal(){
  const modal=document.getElementById('cvPreviewModal');
  if(!modal)return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}
function bindCvPreview(){
  document.querySelectorAll('.cv-link').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();openCvModal();}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCvModal();});
}

function bindBackToTop(){ const btn=document.querySelector('[data-to-top]'); if(btn)btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'})); }
function bindMobileMenu(){ const toggle=document.getElementById('mobileMenuToggle'); const menu=document.getElementById('mobileMenu'); if(!toggle||!menu)return; const close=()=>{menu.classList.remove('open');toggle.classList.remove('open');toggle.setAttribute('aria-expanded','false');}; toggle.addEventListener('click',()=>{const open=!menu.classList.contains('open');menu.classList.toggle('open',open);toggle.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));}); menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close)); document.addEventListener('keydown',e=>{if(e.key==='Escape')close();}); }
function setCanonical(){
  const link=document.getElementById('canonicalLink'); if(!link)return;
  const configured=window.FK_SITE_CONFIG?.productionBaseUrl?.replace(/\/$/,'');
  if(configured){const file=(location.pathname.split('/').pop()||'index.html');link.href=file==='index.html'?configured+'/':configured+'/'+file;return;}
  if(location.protocol!=='file:'){const url=new URL(location.href);url.hash='';url.search='';link.href=url.toString();}
}

const avatarResponses={en:{default:'Pick a topic and I’ll give you the short version.',work:'I’m currently working on offensive speech detection and previously explored vision-language models. The Research & Projects page also includes selected course projects.',teaching:'I’ve supported courses in programming, applied machine learning, and probability & statistics as an undergraduate teaching fellow.',about:'I’m currently pursuing a PhD in Intelligent Transportation at HKUST (Guangzhou), advised by Prof. Benedict Jun MA. My B.Sc. background is in Data Science and Big Data Technology.',connect:'You can reach me on WhatsApp for quick messages, or by email for academic conversations and collaboration.'},zh:{default:'选一个主题，我用简短的方式告诉你。',work:'我目前在做冒犯性言论检测研究，也曾探索视觉语言模型。Research & Projects 页面还展示了代表性的课程项目。',teaching:'我曾以本科生教学助理身份参与编程、应用机器学习和概率统计课程。',about:'我目前在香港科技大学（广州）攻读智能交通博士学位，由 Benedict Jun MA 教授指导；我的本科背景是数据科学与大数据技术。',connect:'快速沟通可以使用 WhatsApp；如果是学术交流或合作，建议使用电子邮件。'}};
const avatarEaster={en:{one:'You found a small easter egg. Most of this site comes back to the same three things: research, projects, and teaching.',two:'Still curious? The Research & Projects page has the longer version.'},zh:{one:'你发现了一个小彩蛋。这个网站的大部分内容其实都围绕三件事：研究、项目和教学。',two:'还在点吗？更完整的内容在 Research & Projects 页面。'}};
let avatarClickCount=0;
let activeAvatarTopic='default';
function updateAvatarResponse(topic=activeAvatarTopic){
  activeAvatarTopic=topic||'default';
  const response=document.getElementById('avatarResponse');
  const bubble=document.querySelector('.avatar-bubble');
  if(bubble){bubble.classList.add('is-updating');setTimeout(()=>bubble.classList.remove('is-updating'),220);}
  if(response)response.textContent=avatarResponses[currentLang()][activeAvatarTopic]||avatarResponses[currentLang()].default;
  const jump=document.getElementById('avatarJump');
  if(!jump)return;
  const links={work:'research.html',teaching:'index.html#teaching-profile',about:'about.html',connect:'connect.html'};
  if(activeAvatarTopic==='default')jump.classList.add('hidden');
  else{jump.href=links[activeAvatarTopic]||'#';jump.textContent=currentLang()==='zh'?'前往页面 →':'Open page →';jump.classList.remove('hidden');}
}
function blinkAvatar(avatar){
  if(!avatar || avatar.classList.contains('is-blinking')) return;
  avatar.classList.add('talk','is-blinking');
  clearTimeout(avatar._blinkCleanup);
  avatar._blinkCleanup=setTimeout(()=>avatar.classList.remove('talk','is-blinking'),430);
}
function previewAvatarResponse(topic){
  const response=document.getElementById('avatarResponse');
  const bubble=document.querySelector('.avatar-bubble');
  if(!response)return;
  if(bubble){bubble.classList.add('is-updating');clearTimeout(bubble._previewTimer);bubble._previewTimer=setTimeout(()=>bubble.classList.remove('is-updating'),170);}
  response.textContent=avatarResponses[currentLang()][topic]||avatarResponses[currentLang()].default;
}

const AVATAR_STATE_CLASSES=['state-listening','state-thinking','state-answering','state-curious','state-easter'];
function resetAvatarEyes(avatar){
  avatar?.querySelectorAll('.avatar-eye-track').forEach(track=>{track.style.transform='translate(0px, 0px)';});
}
function scheduleBlink(avatar){
  if(!avatar || window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  clearTimeout(avatar._blinkTimer);
  const tick=()=>{
    const wait=4300+Math.random()*4200;
    avatar._blinkTimer=setTimeout(()=>{
      if(document.visibilityState==='visible' && avatar.isConnected) blinkAvatar(avatar);
      if(avatar.isConnected) tick();
    },wait);
  };
  tick();
}
function setAvatarState(avatar,state='idle',duration=0){
  if(!avatar)return;
  const safe=['idle','listening','thinking','answering','curious','easter'].includes(state)?state:'idle';
  clearTimeout(avatar._stateTimer);
  avatar._stateToken=(avatar._stateToken||0)+1;
  const token=avatar._stateToken;
  AVATAR_STATE_CLASSES.forEach(c=>avatar.classList.remove(c));
  avatar.dataset.avatarState=safe;
  if(safe!=='idle')avatar.classList.add(`state-${safe}`);
  if(safe!=='listening')resetAvatarEyes(avatar);
  if(safe!=='idle'&&duration>0){
    avatar._stateTimer=setTimeout(()=>{
      if(avatar._stateToken===token)setAvatarState(avatar,'idle',0);
    },duration);
  }
}
function bindAvatar(){
  const avatar=document.getElementById('avatarButton');
  const options=[...document.querySelectorAll('.avatar-option')];
  if(!avatar)return;
  const states={work:'thinking',teaching:'listening',about:'curious',connect:'answering'};
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  avatar.dataset.avatarState='idle';
  avatar.classList.add('avatar-float');
  scheduleBlink(avatar);

  const clearPress=()=>avatar.classList.remove('pressed','is-pressed');
  avatar.addEventListener('pointerdown',()=>avatar.classList.add('pressed','is-pressed'));
  avatar.addEventListener('pointerup',clearPress);
  avatar.addEventListener('pointercancel',clearPress);

  avatar.addEventListener('pointerenter',()=>{
    if(!avatar.dataset.previewTopic)setAvatarState(avatar,'listening',0);
  });
  avatar.addEventListener('pointerleave',()=>{
    clearPress();
    avatar.dataset.previewTopic='';
    resetAvatarEyes(avatar);
    setAvatarState(avatar,'idle',0);
  });
  avatar.addEventListener('pointermove',e=>{
    if(reduced || e.pointerType==='touch' || avatar.dataset.avatarState==='thinking')return;
    const rect=avatar.getBoundingClientRect();
    if(!rect.width||!rect.height)return;
    const dx=Math.max(-7,Math.min(7,((e.clientX-rect.left)/rect.width-.5)*10));
    const dy=Math.max(-4,Math.min(4,((e.clientY-rect.top)/rect.height-.5)*6));
    avatar.querySelectorAll('.avatar-eye-track').forEach(track=>{track.style.transform=`translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px)`;});
  });

  avatar.addEventListener('click',()=>{
    clearPress();
    avatarClickCount+=1;activeAvatarTopic='default';options.forEach(o=>o.classList.remove('active'));
    avatar.classList.remove('easter-smile','micro-bounce');
    void avatar.offsetWidth;
    blinkAvatar(avatar);
    const response=document.getElementById('avatarResponse');const lang=currentLang();
    let cleanupDelay=900;
    if(avatarClickCount%6===0){
      if(response)response.textContent=avatarEaster[lang].two;
      avatar.classList.add('easter-smile','micro-bounce');setAvatarState(avatar,'easter',1500);cleanupDelay=1650;
    }else if(avatarClickCount%3===0){
      if(response)response.textContent=avatarEaster[lang].one;
      avatar.classList.add('easter-smile');setAvatarState(avatar,'curious',1200);cleanupDelay=1350;
    }else{
      updateAvatarResponse('default');setAvatarState(avatar,'answering',720);
    }
    clearTimeout(avatar._easterCleanup);
    avatar._easterCleanup=setTimeout(()=>avatar.classList.remove('easter-smile','micro-bounce'),cleanupDelay);
    const jump=document.getElementById('avatarJump');if(jump)jump.classList.add('hidden');
  });

  const restoreSelected=()=>{
    avatar.dataset.previewTopic='';
    updateAvatarResponse(activeAvatarTopic);
    setAvatarState(avatar,'idle',0);
    resetAvatarEyes(avatar);
  };
  options.forEach(option=>{
    const topic=option.dataset.topic||'default';
    const showPreview=()=>{avatar.dataset.previewTopic=topic;previewAvatarResponse(topic);setAvatarState(avatar,states[topic]||'listening',0);};
    option.addEventListener('pointerenter',showPreview);
    option.addEventListener('pointerleave',restoreSelected);
    option.addEventListener('focus',showPreview);
    option.addEventListener('blur',restoreSelected);
    option.addEventListener('click',()=>{
      options.forEach(i=>i.classList.remove('active'));option.classList.add('active');avatar.classList.remove('easter-smile','micro-bounce');
      activeAvatarTopic=topic;avatar.dataset.previewTopic='';updateAvatarResponse(activeAvatarTopic);blinkAvatar(avatar);setAvatarState(avatar,states[activeAvatarTopic]||'answering',900);
    });
  });

  document.addEventListener('visibilitychange',()=>{
    if(document.visibilityState!=='visible'){
      clearTimeout(avatar._stateTimer);resetAvatarEyes(avatar);setAvatarState(avatar,'idle',0);avatar.classList.remove('talk','is-blinking','pressed','is-pressed','micro-bounce');
    }else scheduleBlink(avatar);
  });
}
function bindReveal(){const els=document.querySelectorAll('.reveal');if(!els.length)return;if(!('IntersectionObserver'in window)){els.forEach(el=>el.classList.add('show'));return;}const obs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');obs.unobserve(entry.target);}}),{threshold:.08});els.forEach(el=>obs.observe(el));}




/* v20 mini companion */

function setCompanionMotionRate(avatar,state){
  const svg=avatar?.querySelector('.research-companion');
  if(!svg || typeof svg.setCurrentTime!=='function') return;
  // Track stays fixed; only the small nodes travel along it.
  // The visual reaction comes from node pulse/core movement rather than rotating the whole ring.
}

function companionSvgMarkup(){return `<svg class="research-companion" viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g class="companion-nodes"><circle class="companion-node node-a" cx="118" cy="132" r="10" fill="currentColor" opacity=".22"/><circle class="companion-node node-b" cx="405" cy="143" r="7" fill="currentColor" opacity=".18"/><circle class="companion-node node-c" cx="394" cy="302" r="5" fill="currentColor" opacity=".16"/></g>
  <g class="companion-core"><rect class="companion-body" x="145" y="113" width="230" height="188" rx="92" fill="currentColor"/><rect class="companion-body companion-wing-left" x="76" y="176" width="128" height="76" rx="24" fill="currentColor"/><rect class="companion-body companion-wing-right" x="326" y="174" width="126" height="78" rx="24" fill="currentColor"/><rect class="companion-body companion-crown" x="218" y="64" width="86" height="105" rx="26" fill="currentColor"/><path class="companion-body companion-tail" d="M285 276 C316 272 338 282 342 303 C347 333 321 359 279 370 C266 373 260 364 260 350 L260 303 C260 287 270 278 285 276Z" fill="currentColor"/><g fill="var(--avatar-eye)"><g class="avatar-eye-track avatar-eye-track-left"><rect class="avatar-eye" x="214" y="172" width="30" height="54" rx="10"/></g><g class="avatar-eye-track avatar-eye-track-right"><rect class="avatar-eye" x="278" y="172" width="30" height="54" rx="10"/></g></g><path class="avatar-smile" d="M230 249 C251 264 276 264 296 249" fill="none" stroke="var(--avatar-eye)" stroke-width="8" stroke-linecap="round"/></g>
  <g class="companion-expression" aria-hidden="true"><path class="companion-brow companion-brow-left" d="M209 157 Q225 149 241 157" fill="none" stroke="var(--avatar-eye)" stroke-width="5" stroke-linecap="round"/><path class="companion-brow companion-brow-right" d="M275 157 Q291 149 307 157" fill="none" stroke="var(--avatar-eye)" stroke-width="5" stroke-linecap="round"/><g class="companion-thought"><circle cx="377" cy="114" r="5" fill="currentColor"/><circle cx="394" cy="98" r="7" fill="currentColor"/><circle cx="416" cy="78" r="9" fill="currentColor"/></g><g class="companion-signals" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M92 160 Q72 176 72 202"/><path d="M428 153 Q450 171 451 199"/></g></g>
</svg>`}
const miniCompanionText={
  en:{home:'Need a shortcut?',work:'Want to jump between the research and projects?',about:'Looking for the short version?',connect:'For research questions, email is usually best.'},
  zh:{home:'需要快速导航吗？',work:'想在研究和项目之间快速跳转吗？',about:'想看更简短的版本吗？',connect:'如果是科研相关问题，电子邮件通常最合适。'}
};

function startCompanionOrbit(svg){ return; }
function bindCompanionOrbitMotion(root=document){ return; }

function bindMiniCompanion(){
  if(page==='404'||document.querySelector('.mini-companion'))return;
  const el=document.createElement('aside');el.className='mini-companion';el.setAttribute('aria-label','Quick profile companion');
  el.innerHTML=`<div class="mini-companion-panel"><p></p><div class="mini-companion-links"><a href="research.html">Research</a><a href="about.html">About</a><a href="connect.html">Connect</a></div></div><span class="mini-companion-tooltip"></span><button class="mini-companion-button" type="button" aria-label="Open quick navigation">${companionSvgMarkup()}</button>`;
  document.body.appendChild(el);
  bindCompanionOrbitMotion(el);
  const button=el.querySelector('.mini-companion-button');const panel=el.querySelector('.mini-companion-panel');button.classList.add(`context-${page}`);if(page==='work')button.classList.add('state-thinking');if(page==='connect')button.classList.add('easter-smile');
  const syncText=()=>{const lang=currentLang();const msg=miniCompanionText[lang][page]||miniCompanionText[lang].home;panel.querySelector('p').textContent=msg;el.querySelector('.mini-companion-tooltip').textContent=msg;};syncText();
  document.addEventListener('languagechange-fk',syncText);
  button.addEventListener('click',()=>{el.classList.toggle('open');if(el.classList.contains('open'))el.classList.remove('show-tooltip');});
  document.addEventListener('click',e=>{if(!el.contains(e.target))el.classList.remove('open')});
  let tipped=false;
  const threshold=page==='home'?Math.max(520,window.innerHeight*.62):300;
  const sync=()=>{const show=window.scrollY>threshold;el.classList.toggle('visible',show);if(show&&!tipped){tipped=true;setTimeout(()=>el.classList.add('show-tooltip'),350);setTimeout(()=>el.classList.remove('show-tooltip'),3000);}};
  sync();window.addEventListener('scroll',sync,{passive:true});
}

/* v19 premium features */
const premiumText={
  en:{
    commandPlaceholder:'Search pages, projects, or CV…',commandHint:'Navigate with ↑ ↓ · Enter to open · Esc to close',commandEmpty:'No matching result',
    viewDetails:'View case study →',report:'Preview full report →',reportPreview:'Project Report Preview',openPdf:'Open PDF',downloadPdf:'Download',projectDetails:'Project case study',overview:'Brief',problem:'Question',context:'Context',tools:'Methods & tools',workDone:'My role & approach',result:'Outcome',learning:'Reflection',visual:'Project visual',close:'Close',
    nfTitle:'This route could not be found.',nfBody:'The page may have moved, or this route is no longer available. Return home or continue to the research profile.',nfHome:'Back home',nfResearch:'Research & Projects'
  },
  zh:{
    commandPlaceholder:'搜索页面、项目或简历…',commandHint:'使用 ↑ ↓ 导航 · Enter 打开 · Esc 关闭',commandEmpty:'没有找到相关内容',
    viewDetails:'查看案例 →',report:'预览完整报告 →',reportPreview:'项目报告预览',openPdf:'打开 PDF',downloadPdf:'下载',projectDetails:'项目案例',overview:'项目简介',problem:'问题',context:'背景',tools:'方法与工具',workDone:'我的角色与方法',result:'结果',learning:'反思与收获',visual:'项目视觉',close:'关闭',
    nfTitle:'未找到这条路线。',nfBody:'页面可能已移动，或这条路线已不再可用。你可以返回首页，或继续查看研究与项目。',nfHome:'返回首页',nfResearch:'研究与项目'
  }
};
const projectDetails={
  xray:{
    image:'assets/project-xray-report.webp',year:'2025',badge:'MEDICAL AI',pdf:'reports/Frederick_Khasanto_Project_Xray_Diffusion_Models.pdf',
    en:{title:'Diffusion Models for X-ray Image Generation',overview:'A four-person Deep Learning project comparing an unconditional DDPM baseline with DiNO-conditioned latent diffusion for chest X-ray synthesis.',problem:'Study whether semantic conditioning can improve the realism and diversity of synthetic chest X-rays under practical computational constraints.',context:'Deep Learning final project · CUHK(SZ) · Team: Adrian Kristanto, Frederick Khasanto, Philip Leong Jun Hwa, Stefan Susanto',tools:['PyTorch','DDPM','DiNO ViT','Latent Diffusion','DDIM','NIH Chest X-ray14'],work:'Working as part of the project team, Frederick contributed to a comparative diffusion-model study covering training, generation, and evaluation. The report uses 13,499 training images and 1,500 validation images and evaluates reconstruction fidelity, diversity, interpolation continuity, and coarse small-sample FID.',result:'The report records a coarse FID of 324.44 @ 24 samples for the DDPM baseline and 2.54 @ 64 samples for DiNO-Diffusion, alongside qualitative reconstruction, diversity, and interpolation results. Because the FID sample sizes are small and unequal, the report treats the metric conservatively.',learning:'The project provided hands-on experience with diffusion models for medical imagery and highlighted the importance of domain-appropriate evaluation beyond a single generic image metric.'},
    zh:{title:'用于 X 光图像生成的扩散模型',overview:'一个四人深度学习项目，对比无条件 DDPM 基线与 DiNO 条件潜空间扩散模型在胸部 X 光生成上的表现。',problem:'研究在现实算力限制下，语义条件是否能提升合成胸部 X 光图像的真实感与多样性。',context:'深度学习期末项目 · 香港中文大学（深圳） · 团队：Adrian Kristanto、Frederick Khasanto、Philip Leong Jun Hwa、Stefan Susanto',tools:['PyTorch','DDPM','DiNO ViT','潜空间扩散','DDIM','NIH Chest X-ray14'],work:'Frederick 作为项目团队成员参与了扩散模型的对比研究，涵盖训练、生成与评估。报告使用 13,499 张训练图像和 1,500 张验证图像，并从重建保真度、多样性、插值连续性以及粗略的小样本 FID 等方面进行评估。',result:'报告记录 DDPM 基线的粗略 FID 为 324.44（24 个样本），DiNO-Diffusion 为 2.54（64 个样本），并展示了重建、多样性和插值的定性结果。由于 FID 样本量较小且不相等，报告本身也对此指标采取谨慎解读。',learning:'该项目带来了医学影像扩散模型的实践经验，也体现了在医学领域不能只依赖单一通用图像指标进行评估。'}
  },
  llmsafety:{
    image:'assets/project-llm-safety-report.webp',year:'2025',badge:'LLM SAFETY',pdf:'reports/Frederick_Khasanto_Project_LLM_Jailbreak_Evaluation.pdf',
    en:{title:'Evaluation of LLMs on Jailbreak & Adversarial Attacks',overview:'A two-person CSC4100 final project evaluating jailbreak robustness across LLaMA, Qwen, and Mistral.',problem:'Measure how model family, attack strategy, and policy domain influence whether an aligned LLM refuses or complies with adversarial jailbreak prompts.',context:'CSC4100 Final Project · School of Data Science, CUHK(SZ) · Frederick Khasanto & Stefan Susanto',tools:['LLaMA 3.1 8B Instruct','Qwen 2.5 7B Instruct','Mistral 7B Instruct v0.3','OpenRouter API','JailbreakV-28K','Rule-based scoring'],work:'The team built a balanced set of 100 prompts across six jailbreak categories, queried all three model families under the same conditions, scored refusal and unsafe-continuation signals automatically, manually verified responses, and aggregated results by model, attack type, and policy domain.',result:'Overall vulnerability was 5% for LLaMA, 50% for Qwen, and 76% for Mistral. Across models, injection attacks reached 67% aggregated vulnerability, roleplay 59%, and obfuscation 13%, showing strong model- and attack-dependent variation.',learning:'The project reinforced that LLM safety cannot be summarized by a single model-level score: attack strategy and policy context materially change observed robustness.'},
    zh:{title:'大语言模型越狱与对抗攻击评估',overview:'一个两人 CSC4100 期末项目，对 LLaMA、Qwen 与 Mistral 的越狱鲁棒性进行评估。',problem:'衡量模型家族、攻击策略与政策领域如何影响对齐后的 LLM 对对抗性越狱提示的拒绝或服从行为。',context:'CSC4100 期末项目 · 香港中文大学（深圳）数据科学学院 · Frederick Khasanto 与 Stefan Susanto',tools:['LLaMA 3.1 8B Instruct','Qwen 2.5 7B Instruct','Mistral 7B Instruct v0.3','OpenRouter API','JailbreakV-28K','规则评分'],work:'团队构建了 100 条、覆盖六类越狱方式的平衡提示集，在统一条件下测试三个模型家族，通过规则自动检测拒绝与不安全延续信号，再进行人工复核，并按模型、攻击类型和政策领域汇总结果。',result:'总体漏洞率分别为 LLaMA 5%、Qwen 50%、Mistral 76%。跨模型汇总后，注入攻击漏洞率为 67%，角色扮演为 59%，混淆攻击为 13%，显示出明显的模型与攻击方式差异。',learning:'该项目说明 LLM 安全性不能只用单一总体分数概括；攻击策略和政策语境会显著改变观察到的鲁棒性。'}
  },
  rag:{
    image:'assets/project-rag-report.webp',year:'2026',badge:'RAG SYSTEM',pdf:'reports/Frederick_Khasanto_Project_RAG_Knowledge_Management.pdf',
    en:{title:'RAG System for Internal Knowledge Management',overview:'A three-person CUHK(SZ) capstone project building a multilingual, source-grounded RAG chatbot over internal Notion PDF documentation.',problem:'Make unstructured internal manuals faster to search while reducing unsupported chatbot answers and preserving source transparency.',context:'CUHK(SZ) Capstone Project · AAIL-3 · Team: Frederick Khasanto, Matthew Pranata, Stefan Susanto',tools:['RAG','Next.js 14','FastAPI','Supabase + pgvector','PyMuPDF','OpenRouter','Hybrid retrieval'],work:'The system ingests Notion PDF exports, extracts and cleans text, chunks documents into 500-token segments with 50-token overlap, stores embeddings and metadata in Supabase, retrieves relevant context with vector and keyword search, and generates answers with source URLs through a chat interface supporting English, Chinese, and mixed-language queries.',result:'The project presentation reports latency reduced from about 30 seconds to 5–7 seconds, improved answer reliability and source correctness, and multilingual support. It also documents remaining challenges around hallucinations and non-robust context retrieval.',learning:'Building the full RAG stack made retrieval quality a first-class engineering concern: grounded generation is only as reliable as the context selected upstream.'},
    zh:{title:'内部知识管理 RAG 系统',overview:'一个三人港中深毕业项目，基于内部 Notion PDF 文档构建支持多语言、可追溯来源的 RAG 聊天机器人。',problem:'让非结构化内部手册更容易搜索，同时减少聊天机器人无依据的回答，并保留来源透明度。',context:'香港中文大学（深圳）毕业项目 · AAIL-3 · 团队：Frederick Khasanto、Matthew Pranata、Stefan Susanto',tools:['RAG','Next.js 14','FastAPI','Supabase + pgvector','PyMuPDF','OpenRouter','混合检索'],work:'系统读取 Notion PDF 导出文件，提取与清洗文本，以 500 token、50 token 重叠进行切分，将嵌入和元数据存入 Supabase，再通过向量与关键词检索获取相关上下文，并在支持英文、中文和混合语言查询的聊天界面中生成附带来源链接的回答。',result:'项目展示报告称，响应延迟从约 30 秒降至 5–7 秒，同时提升回答可靠性与来源正确性，并支持多语言查询。报告也明确记录了幻觉和上下文检索不够稳健等仍待解决的问题。',learning:'完整搭建 RAG 技术栈后，检索质量成为核心工程问题：上游选取的上下文质量直接决定了下游生成结果的可靠性。'}
  },
  optimization:{
    image:'assets/project-optimization-report.webp',year:'2025',badge:'OPTIMIZATION',pdf:'reports/Frederick_Khasanto_Project_Online_Linear_Programming_Resource_Allocation.pdf',
    en:{title:'Online Linear Programming & Resource Allocation',overview:'A two-person DDA4300 final project studying sequential resource allocation through online linear programming and convex optimization.',problem:'How close can online allocation methods get to an offline LP optimum when bids arrive sequentially, and how does greater adaptivity trade off against computational cost?',context:'DDA4300 Final Project · Project 7 · Frederick Khasanto & Stefan Susanto · April 30, 2025',tools:['Linear Programming','Convex Optimization','KKT Conditions','Dynamic Dual Pricing','Action-History Learning','Stochastic Gradient Descent'],work:'The team simulated 10,000 bidders across 10 resources, used the full offline LP as a benchmark, and evaluated one-time dual-price learning, dynamic SLPM updates, convex slack-utility variants, an action-history-dependent method, and stochastic-gradient updates of the population dual.',result:'Dynamic SLPM reached a 0.969 revenue ratio versus the offline optimum, dynamic convex pricing reached 0.900, the action-history-dependent algorithm reached 0.998, and the SGD-based online LP reached 0.991. The report notes that the action-history method required substantially more computation, while SGD achieved near-optimal revenue with much lower overhead.',learning:'The experiments make the performance-computation trade-off concrete: more adaptive price updates can approach the offline benchmark, while lightweight SGD offers a scalable alternative. The report also shows why random-order or approximately exchangeable arrivals matter for regret guarantees.'},
    zh:{title:'在线线性规划与资源分配',overview:'一个两人 DDA4300 期末项目，通过在线线性规划与凸优化研究顺序到达场景下的资源分配。',problem:'当竞标按顺序到达时，在线分配方法能够多接近离线 LP 最优解？更强的自适应能力又会带来怎样的计算成本权衡？',context:'DDA4300 期末项目 · Project 7 · Frederick Khasanto 与 Stefan Susanto · 2025年4月30日',tools:['线性规划','凸优化','KKT 条件','动态对偶定价','Action-History 学习','随机梯度下降'],work:'团队模拟了 10,000 个竞标者和 10 类资源，以完整离线 LP 作为基准，并评估一次性对偶价格学习、动态 SLPM、带 slack utility 的凸优化版本、Action-History 方法以及针对 population dual 的随机梯度更新。',result:'动态 SLPM 相对离线最优的收入比为 0.969，动态凸定价为 0.900，Action-History 方法达到 0.998，基于 SGD 的在线 LP 达到 0.991。报告同时指出，Action-History 方法计算开销明显更高，而 SGD 以更低开销取得了接近最优的收入表现。',learning:'实验清楚展示了性能与计算量之间的权衡：更频繁、更自适应的价格更新可以逼近离线最优，而轻量级 SGD 提供了更具扩展性的替代方案。报告也说明了随机顺序或近似可交换到达对 regret 保证的重要性。'}
  },
  knowyourbody:{
    image:'assets/project-knowyourbody.webp',year:'2025',badge:'LLM APP',
    en:{title:'KnowYourBody',overview:'An AI practicum web application that uses LLM APIs to support educational and personalized health analytics.',problem:'Turn health-related inputs into an educational, personalized web experience using LLM APIs.',context:'AI Practicum project · Oct–Dec 2025',tools:['LLM APIs','Web App','Health Analytics'],work:'I developed the web application and integrated LLM APIs to turn health-related inputs into educational, personalized analysis.',result:'A web-application prototype integrating LLM APIs for educational and personalized health analytics.',learning:'Practical experience connecting LLM APIs to a user-facing application and structuring model outputs around an end-user workflow.'},
    zh:{title:'KnowYourBody',overview:'这是一个 AI 实践课程网页应用，通过 LLM API 提供教育性和个性化的健康分析。',problem:'利用 LLM API 将健康相关输入转化为教育性、个性化的网页体验。',context:'AI 实践项目 · 2025年10月–12月',tools:['LLM API','网页应用','健康分析'],work:'我负责开发网页应用并整合 LLM API，把健康相关输入转化为教育性和个性化分析。',result:'完成一个整合 LLM API 的网页应用原型，用于教育性与个性化健康分析。',learning:'积累了将 LLM API 接入用户端应用，并围绕用户流程组织模型输出的实践经验。'}
  },
  smartbot:{
    image:'assets/project-smartbot.webp',year:'2024',badge:'AWS BOT',
    en:{title:'SmartBot: Cloud-based Clinic Appointment Chatbot',overview:'A Cloud Computing course project built around a clinic appointment scheduling chatbot.',problem:'Support clinic appointment scheduling through a simple conversational cloud application.',context:'Cloud Computing project · Oct–Dec 2024',tools:['AWS Cloud Functions','Chatbot','Cloud Computing'],work:'I built the appointment-scheduling chatbot and used AWS Cloud Functions for the cloud-based workflow.',result:'A clinic appointment chatbot backed by AWS Cloud Functions as the course-project implementation.',learning:'Experience structuring a conversational scheduling flow around serverless cloud functions.'},
    zh:{title:'SmartBot：云端门诊预约聊天机器人',overview:'这是一个云计算课程项目，围绕门诊预约场景构建聊天机器人。',problem:'通过一个简单的云端对话应用支持门诊预约流程。',context:'云计算课程项目 · 2024年10月–12月',tools:['AWS Cloud Functions','聊天机器人','云计算'],work:'我构建了预约聊天机器人，并使用 AWS Cloud Functions 实现云端工作流。',result:'完成一个以 AWS Cloud Functions 为后端工作流的门诊预约聊天机器人课程项目。',learning:'积累了围绕无服务器云函数设计对话式预约流程的实践经验。'}
  }
};

function syncPremiumLanguage(){
  const lang=currentLang(); const pt=premiumText[lang];
  document.querySelectorAll('.project-detail-btn').forEach(b=>b.textContent=pt.viewDetails);
  const cmd=document.querySelector('.command-palette'); if(cmd){cmd.querySelector('.command-input').placeholder=pt.commandPlaceholder;cmd.querySelector('.command-hint').textContent=pt.commandHint;}
  const nfTitle=document.getElementById('nfTitle'); if(nfTitle){nfTitle.textContent=pt.nfTitle;document.getElementById('nfBody').textContent=pt.nfBody;document.getElementById('nfHome').textContent=pt.nfHome;document.getElementById('nfResearch').textContent=pt.nfResearch;}
  if(document.querySelector('.project-modal.open')){ const key=document.querySelector('.project-modal')?.dataset.project; if(key)renderProjectModal(key); }
  renderCommandResults(document.querySelector('.command-input')?.value||'');
}

function bindHeaderScroll(){
  const header=document.querySelector('.site-header'); if(!header)return;
  const sync=()=>header.classList.toggle('is-scrolled',window.scrollY>24);
  sync(); window.addEventListener('scroll',sync,{passive:true});
}

function ensureCommandTrigger(){
  const actions=document.querySelector('.header-actions'); if(!actions||document.querySelector('.command-trigger'))return;
  const btn=document.createElement('button');btn.type='button';btn.className='command-trigger';btn.textContent='⌘K';btn.setAttribute('aria-label','Search and navigate');
  const cv=actions.querySelector('.cv-link'); if(cv)actions.insertBefore(btn,cv);else actions.appendChild(btn);
  btn.addEventListener('click',openCommandPalette);
}

function commandItems(){
  const lang=currentLang();
  return [
    {label:lang==='zh'?'首页':'Home',desc:lang==='zh'?'返回首页':'Back to the homepage',href:'index.html',key:'H'},
    {label:lang==='zh'?'研究与项目':'Research & Projects',desc:lang==='zh'?'科研经历和重点项目':'Research experience and selected projects',href:'research.html',key:'R'},
    {label:lang==='zh'?'关于':'About',desc:lang==='zh'?'背景、教学和技能':'Background, teaching, and skills',href:'about.html',key:'A'},
    {label:lang==='zh'?'联系':'Connect',desc:lang==='zh'?'联系方式':'Ways to get in touch',href:'connect.html',key:'C'},
    {label:lang==='zh'?'简历预览':'CV Preview',desc:lang==='zh'?'在网站内查看 PDF':'Preview the PDF without leaving the site',action:'cv',key:'V'},
    {label:projectDetails.xray[lang].title,desc:'2025 · Medical AI · Diffusion',action:'project',project:'xray'},
    {label:projectDetails.llmsafety[lang].title,desc:'2025 · LLM Safety · Jailbreak Evaluation',action:'project',project:'llmsafety'},
    {label:projectDetails.optimization[lang].title,desc:'2025 · Optimization · Online LP',action:'project',project:'optimization'},
    {label:projectDetails.rag[lang].title,desc:'2026 · RAG · Capstone',action:'project',project:'rag'},
    {label:projectDetails.knowyourbody[lang].title,desc:'2025 · LLM App',action:'project',project:'knowyourbody'},
    {label:projectDetails.smartbot[lang].title,desc:'2024 · AWS Cloud Functions',action:'project',project:'smartbot'}
  ];
}
function ensureCommandPalette(){
  let el=document.querySelector('.command-palette'); if(el)return el;
  el=document.createElement('div');el.className='command-palette';el.setAttribute('aria-hidden','true');
  el.innerHTML='<div class="command-palette-backdrop" data-command-close></div><section class="command-panel" role="dialog" aria-modal="true" aria-label="Quick navigation"><div class="command-input-wrap"><span class="command-search-icon">⌕</span><input class="command-input" type="search" autocomplete="off" spellcheck="false"></div><div class="command-hint"></div><div class="command-results"></div></section>';
  document.body.appendChild(el);el.querySelector('[data-command-close]').addEventListener('click',closeCommandPalette);el.querySelector('.command-input').addEventListener('input',e=>renderCommandResults(e.target.value));
  return el;
}
function renderCommandResults(query=''){
  const el=document.querySelector('.command-palette'); if(!el)return;
  const q=query.trim().toLowerCase(); const items=commandItems().filter(i=>!q||`${i.label} ${i.desc||''}`.toLowerCase().includes(q));
  const box=el.querySelector('.command-results');
  if(!items.length){box.innerHTML=`<div class="command-empty">${premiumText[currentLang()].commandEmpty}</div>`;return;}
  box.innerHTML=items.map((i,idx)=>`<button class="command-item${idx===0?' active':''}" type="button" data-command-index="${idx}"><div><strong>${i.label}</strong><span>${i.desc||''}</span></div>${i.key?`<kbd>${i.key}</kbd>`:''}</button>`).join('');
  [...box.querySelectorAll('.command-item')].forEach((b,idx)=>b.addEventListener('click',()=>runCommand(items[idx])));
  box._items=items;
}
function openCommandPalette(){
  const el=ensureCommandPalette(); el.classList.add('open');el.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');
  const input=el.querySelector('.command-input');input.value='';input.placeholder=premiumText[currentLang()].commandPlaceholder;el.querySelector('.command-hint').textContent=premiumText[currentLang()].commandHint;renderCommandResults('');setTimeout(()=>input.focus(),20);
}
function closeCommandPalette(){const el=document.querySelector('.command-palette');if(!el)return;el.classList.remove('open');el.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')}
function runCommand(item){closeCommandPalette();if(item.action==='cv'){openCvModal();return;}if(item.action==='project'){openProjectModal(item.project);return;}if(item.href)navigateWithTransition(item.href)}
function bindCommandPalette(){
  ensureCommandTrigger();
  document.addEventListener('keydown',e=>{
    if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();document.querySelector('.command-palette.open')?closeCommandPalette():openCommandPalette();return;}
    if(e.key==='/'&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)){e.preventDefault();openCommandPalette();return;}
    const el=document.querySelector('.command-palette.open');if(!el)return;
    if(e.key==='Escape'){e.preventDefault();closeCommandPalette();return;}
    const buttons=[...el.querySelectorAll('.command-item')];if(!buttons.length)return;let idx=buttons.findIndex(b=>b.classList.contains('active'));
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();buttons[idx]?.classList.remove('active');idx=e.key==='ArrowDown'?(idx+1)%buttons.length:(idx-1+buttons.length)%buttons.length;buttons[idx].classList.add('active');buttons[idx].scrollIntoView({block:'nearest'});}
    if(e.key==='Enter'&&document.activeElement.classList.contains('command-input')){e.preventDefault();buttons[idx>=0?idx:0]?.click();}
  });
}

function ensureProjectModal(){
  let modal=document.querySelector('.project-modal');if(modal)return modal;
  modal=document.createElement('div');modal.className='project-modal';modal.setAttribute('aria-hidden','true');
  modal.innerHTML='<div class="project-modal-backdrop" data-project-close></div><section class="project-modal-panel project-case-study" role="dialog" aria-modal="true" aria-labelledby="projectModalTitle"><div class="project-modal-head"><div><span class="project-modal-kicker"></span><h2 id="projectModalTitle"></h2></div><button class="project-modal-close" type="button" data-project-close>×</button></div><div class="project-case-hero"><figure class="project-modal-visual"><img alt=""><figcaption></figcaption></figure><div class="project-case-summary"><div class="project-detail-block project-detail-lead"><span data-project-label="overview"></span><p data-project-value="overview"></p></div><div class="project-detail-block project-tools-block"><span data-project-label="tools"></span><div class="project-tools" data-project-value="tools"></div><button class="project-modal-report" data-project-report-preview-button hidden type="button"></button></div></div></div><div class="project-case-grid"><div class="project-detail-block"><span data-project-label="problem"></span><p data-project-value="problem"></p></div><div class="project-detail-block"><span data-project-label="context"></span><p data-project-value="context"></p></div><div class="project-detail-block project-detail-wide"><span data-project-label="work"></span><p data-project-value="work"></p></div><div class="project-detail-block"><span data-project-label="result"></span><p data-project-value="result"></p></div><div class="project-detail-block"><span data-project-label="learning"></span><p data-project-value="learning"></p></div></div></section>';
  document.body.appendChild(modal);modal.querySelectorAll('[data-project-close]').forEach(x=>x.addEventListener('click',closeProjectModal));return modal;
}
function renderProjectModal(key){
  const data=projectDetails[key];if(!data)return;const lang=currentLang(),copy=data[lang],pt=premiumText[lang],modal=ensureProjectModal();modal.dataset.project=key;
  modal.querySelector('.project-modal-kicker').textContent=`${data.year} · ${data.badge} · ${pt.projectDetails}`;modal.querySelector('#projectModalTitle').textContent=copy.title;
  modal.querySelector('[data-project-label="overview"]').textContent=pt.overview;modal.querySelector('[data-project-value="overview"]').textContent=copy.overview;
  modal.querySelector('[data-project-label="problem"]').textContent=pt.problem;modal.querySelector('[data-project-value="problem"]').textContent=copy.problem;
  modal.querySelector('[data-project-label="context"]').textContent=pt.context;modal.querySelector('[data-project-value="context"]').textContent=copy.context;
  modal.querySelector('[data-project-label="work"]').textContent=pt.workDone;modal.querySelector('[data-project-value="work"]').textContent=copy.work;
  modal.querySelector('[data-project-label="result"]').textContent=pt.result;modal.querySelector('[data-project-value="result"]').textContent=copy.result;
  modal.querySelector('[data-project-label="learning"]').textContent=pt.learning;modal.querySelector('[data-project-value="learning"]').textContent=copy.learning;
  modal.querySelector('[data-project-label="tools"]').textContent=pt.tools;modal.querySelector('[data-project-value="tools"]').innerHTML=copy.tools.map(t=>`<span>${t}</span>`).join('');
  const report=modal.querySelector('[data-project-report-preview-button]');if(report){if(data.pdf){report.hidden=false;report.dataset.projectReportPreview=key;report.textContent=pt.report;}else{report.hidden=true;delete report.dataset.projectReportPreview;}}
  const img=modal.querySelector('.project-modal-visual img');img.src=data.image;img.alt=copy.title;modal.querySelector('.project-modal-visual figcaption').textContent=pt.visual;modal.querySelector('.project-modal-close').setAttribute('aria-label',pt.close);
}
function openProjectModal(key){const modal=ensureProjectModal();renderProjectModal(key);modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');setTimeout(()=>modal.querySelector('.project-modal-close')?.focus(),20)}
function closeProjectModal(){const modal=document.querySelector('.project-modal');if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')}
function bindProjectDetails(){document.querySelectorAll('[data-project-open]').forEach(btn=>btn.addEventListener('click',()=>openProjectModal(btn.dataset.projectOpen)));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.getElementById('projectReportPreviewModal')?.classList.contains('open'))closeProjectModal()});syncPremiumLanguage()}

function ensureProjectReportPreviewModal(){
  let modal=document.getElementById('projectReportPreviewModal');
  if(modal)return modal;
  modal=document.createElement('div');
  modal.id='projectReportPreviewModal';modal.className='cv-modal project-report-preview-modal';modal.setAttribute('aria-hidden','true');
  modal.innerHTML=`<div class="cv-modal-backdrop" data-project-report-close></div><section class="cv-modal-panel project-report-preview-panel" role="dialog" aria-modal="true" aria-labelledby="projectReportPreviewTitle"><div class="cv-modal-head"><div><span class="cv-modal-kicker" data-project-report-kicker>Project Report Preview</span><h2 id="projectReportPreviewTitle"></h2><div class="cv-modal-meta" data-project-report-meta></div></div><button class="cv-modal-close" type="button" data-project-report-close aria-label="Close">×</button></div><div class="cv-modal-frame-wrap"><iframe class="cv-modal-frame" title="Project report preview"></iframe></div><div class="cv-modal-actions"><a class="secondary-btn" target="_blank" rel="noopener" data-project-report-open>Open PDF</a><a class="primary-btn" download data-project-report-download>Download</a></div></section>`;
  document.body.appendChild(modal);
  modal.querySelectorAll('[data-project-report-close]').forEach(el=>el.addEventListener('click',closeProjectReportPreview));
  return modal;
}
let lastProjectReportTrigger=null;
function openProjectReportPreview(key,trigger=null){
  const data=projectDetails[key];if(!data?.pdf)return;
  const lang=currentLang(),copy=data[lang],pt=premiumText[lang],modal=ensureProjectReportPreviewModal();
  lastProjectReportTrigger=trigger||document.activeElement;
  modal.dataset.project=key;
  modal.querySelector('[data-project-report-kicker]').textContent=pt.reportPreview;
  modal.querySelector('#projectReportPreviewTitle').textContent=copy.title;
  modal.querySelector('[data-project-report-meta]').textContent=`${data.year} · ${data.badge} · PDF`;
  const frame=modal.querySelector('.cv-modal-frame');frame.src=`${data.pdf}#view=FitH`;frame.title=`${copy.title} — ${pt.reportPreview}`;
  modal.querySelector('[data-project-report-open]').href=data.pdf;modal.querySelector('[data-project-report-open]').textContent=pt.openPdf;
  modal.querySelector('[data-project-report-download]').href=data.pdf;modal.querySelector('[data-project-report-download]').textContent=pt.downloadPdf;
  modal.querySelector('.cv-modal-close').setAttribute('aria-label',pt.close);
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');
  setTimeout(()=>modal.querySelector('.cv-modal-close')?.focus(),20);
  trackEvent('project_report_preview',{project:key});
}
function closeProjectReportPreview(){
  const modal=document.getElementById('projectReportPreviewModal');if(!modal)return;
  modal.classList.remove('open');modal.setAttribute('aria-hidden','true');
  if(!document.querySelector('.project-modal.open,.cv-modal.open:not(#projectReportPreviewModal),.focus-modal.open,.command-palette.open'))document.body.classList.remove('modal-open');
  lastProjectReportTrigger?.focus?.();
}
function syncProjectReportPreviewLanguage(){
  const modal=document.getElementById('projectReportPreviewModal');if(!modal)return;const key=modal.dataset.project,data=projectDetails[key];if(!data)return;
  const lang=currentLang(),pt=premiumText[lang],copy=data[lang];modal.querySelector('[data-project-report-kicker]').textContent=pt.reportPreview;modal.querySelector('#projectReportPreviewTitle').textContent=copy.title;modal.querySelector('[data-project-report-open]').textContent=pt.openPdf;modal.querySelector('[data-project-report-download]').textContent=pt.downloadPdf;modal.querySelector('.cv-modal-close').setAttribute('aria-label',pt.close);
}
function bindProjectReportPreview(){
  document.addEventListener('click',e=>{const trigger=e.target.closest('[data-project-report-preview]');if(!trigger)return;e.preventDefault();openProjectReportPreview(trigger.dataset.projectReportPreview,trigger);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.getElementById('projectReportPreviewModal')?.classList.contains('open')){e.preventDefault();closeProjectReportPreview();}});
}

function navigateWithTransition(href){
  if(!href)return;
  document.body.classList.add('page-leaving');
  setTimeout(()=>{location.href=href},120);
}
function bindPageTransitions(){
  requestAnimationFrame(()=>document.body.classList.add('page-ready'));
  document.addEventListener('click',e=>{
    if(e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    const a=e.target.closest('a[href]');if(!a||a.target==='_blank'||a.hasAttribute('download')||a.classList.contains('cv-link')||a.hasAttribute('data-project-report-preview'))return;
    const raw=a.getAttribute('href');if(!raw||raw.startsWith('#')||raw.startsWith('mailto:')||raw.startsWith('tel:')||raw.startsWith('javascript:'))return;
    let url;try{url=new URL(a.href,location.href)}catch(_){return;}if(url.origin!==location.origin)return;if(url.pathname===location.pathname&&url.hash){return;}e.preventDefault();navigateWithTransition(a.href);
  });
}

function sync404Language(){const pt=premiumText[currentLang()];const t=document.getElementById('nfTitle');if(!t)return;t.textContent=pt.nfTitle;document.getElementById('nfBody').textContent=pt.nfBody;document.getElementById('nfHome').textContent=pt.nfHome;document.getElementById('nfResearch').textContent=pt.nfResearch;}



function bindResearchScrollSpy(){
  const nav=document.querySelector('.research-sticky-nav');
  if(!nav)return;
  const links=[...nav.querySelectorAll('[data-section-link]')];
  const pub=document.querySelector('[data-publications-section]');
  const pubLink=nav.querySelector('[data-publications-nav]');
  if(pubLink)pubLink.hidden=!pub||pub.hidden;
  const sections=links.map(link=>document.getElementById(link.dataset.sectionLink)).filter(Boolean).filter(sec=>!sec.hidden);
  const setActive=id=>links.forEach(link=>{const on=link.dataset.sectionLink===id;link.classList.toggle('active',on);if(on)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
  links.forEach(link=>link.addEventListener('click',()=>setActive(link.dataset.sectionLink)));
  if(!('IntersectionObserver'in window)){if(sections[0])setActive(sections[0].id);return;}
  const observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(visible)setActive(visible.target.id);
  },{rootMargin:'-28% 0px -58% 0px',threshold:[0,.15,.4,.7]});
  sections.forEach(sec=>observer.observe(sec));
  if(sections[0])setActive(sections[0].id);
}


function bindAcademicTimeline(){
  const timelines=[...document.querySelectorAll('[data-academic-timeline]')];
  if(!timelines.length)return;
  timelines.forEach(timeline=>{
    const items=[...timeline.querySelectorAll('.timeline-item')];
    const closeOthers=current=>items.forEach(item=>{
      if(item===current)return;
      item.classList.remove('is-expanded');
      item.querySelector('.timeline-trigger')?.setAttribute('aria-expanded','false');
    });
    items.forEach(item=>{
      const trigger=item.querySelector('.timeline-trigger');
      if(!trigger)return;
      trigger.addEventListener('click',()=>{
        const next=!item.classList.contains('is-expanded');
        closeOthers(item);
        item.classList.toggle('is-expanded',next);
        trigger.setAttribute('aria-expanded',String(next));
      });
      trigger.addEventListener('focus',()=>item.classList.add('is-preview'));
      trigger.addEventListener('blur',()=>item.classList.remove('is-preview'));
      item.addEventListener('pointerenter',()=>item.classList.add('is-preview'));
      item.addEventListener('pointerleave',()=>item.classList.remove('is-preview'));
      trigger.addEventListener('keydown',e=>{
        if(e.key==='Escape'){
          item.classList.remove('is-expanded');
          trigger.setAttribute('aria-expanded','false');
          trigger.blur();
        }
      });
    });
  });
}

function bindPageEntry(){ requestAnimationFrame(()=>document.body.classList.add('site-ready')); }
function bindContactModes(){
  const tabs=[...document.querySelectorAll('[data-contact-mode]')];const rows=[...document.querySelectorAll('.contact-row[data-contact-group]')];if(!tabs.length||!rows.length)return;
  const apply=mode=>{tabs.forEach(t=>{const on=t.dataset.contactMode===mode;t.classList.toggle('active',on);t.setAttribute('aria-selected',String(on));});rows.forEach(r=>r.classList.toggle('is-filtered-out',r.dataset.contactGroup!==mode));};
  tabs.forEach(t=>t.addEventListener('click',()=>apply(t.dataset.contactMode)));apply('academic');
}
function syncPublicationSection(){const sec=document.querySelector('[data-publications-section]');if(!sec)return;const count=sec.querySelectorAll('.publication-item').length;sec.hidden=count===0;const nav=document.querySelector('[data-publications-nav]');if(nav)nav.hidden=count===0;}

bindTheme();bindLanguage();bindNavigation();bindCopyButtons();bindCvPreview();bindContactModes();syncPublicationSection();bindBackToTop();bindMobileMenu();bindAvatar();bindReveal();bindHeaderScroll();bindCommandPalette();bindProjectDetails();bindPageTransitions();bindCompanionOrbitMotion();bindResearchScrollSpy();bindAcademicTimeline();bindPageEntry();setCanonical();applyLanguage(savedLang);syncPremiumLanguage();sync404Language();


/* v28 — production, academic credibility, accessibility and focus glossary */
const siteConfig = {
  productionBaseUrl: window.FK_SITE_CONFIG?.productionBaseUrl || '',
  scholarUrl: window.FK_SITE_CONFIG?.scholarUrl || '',
  orcidUrl: window.FK_SITE_CONFIG?.orcidUrl || '',
  analytics: window.FK_SITE_CONFIG?.analytics || null,
  analyticsStorageKey: 'fk-analytics-v1'
};

const publications = [
  // Add publications here. Example schema:
  // {title:'Paper title', authors:'A. Author, Frederick Khasanto', venue:'Venue', year:'2027', status:'Preprint', paper:'https://...', code:'https://...', doi:'https://doi.org/...', arxiv:'https://arxiv.org/...', bibtex:'@article{...}'}
];

const focusGlossary = {
  transportation:{
    en:{title:'Intelligent Transportation',what:'The use of data, sensing, computation, and decision methods to understand and improve how people and vehicles move through transportation systems.',examples:'Typical problems include traffic prediction, mobility behavior, routing, network efficiency, safety, and transport decision support.',relevance:'This is Frederick’s current PhD field at HKUST (Guangzhou).'},
    zh:{title:'智能交通',what:'利用数据、感知、计算与决策方法理解并改善人员和车辆在交通系统中的运行方式。',examples:'常见问题包括交通预测、出行行为、路径规划、网络效率、安全以及交通决策支持。',relevance:'这是 Frederick 目前在香港科技大学（广州）的博士研究领域。'}
  },
  ml:{
    en:{title:'Machine Learning',what:'A branch of AI where models learn patterns from data so they can make predictions, classifications, or other data-driven decisions.',examples:'Examples include classification, regression, representation learning, prediction, and generative modeling.',relevance:'Machine learning connects Frederick’s previous data-science work with his developing transportation research.'},
    zh:{title:'机器学习',what:'人工智能的一个分支，让模型从数据中学习规律，并用于预测、分类或其他数据驱动的决策。',examples:'常见方法包括分类、回归、表征学习、预测和生成模型。',relevance:'机器学习连接了 Frederick 过去的数据科学经历与正在发展的交通研究。'}
  },
  data:{
    en:{title:'Data Science',what:'The practice of turning raw data into useful understanding through statistics, programming, visualization, and modeling.',examples:'It can involve collecting and cleaning data, exploratory analysis, statistical inference, visualization, and predictive modeling.',relevance:'Frederick’s undergraduate degree is in Data Science and Big Data Technology, which forms the foundation of his current research work.'},
    zh:{title:'数据科学',what:'结合统计学、编程、可视化和建模，把原始数据转化为可理解、可使用的信息。',examples:'工作通常包括数据收集与清洗、探索性分析、统计推断、可视化和预测建模。',relevance:'Frederick 本科就读于数据科学与大数据技术专业，这是他目前研究工作的基础之一。'}
  },
  multimodal:{
    en:{title:'Multimodal AI',what:'AI systems that work with more than one type of information, such as text and images, and learn how those modalities relate to each other.',examples:'Examples include vision-language models, image question answering, visual reasoning, and systems such as LLaVA.',relevance:'Frederick studied vision-language models and multimodal architectures during his research internship at UC Santa Cruz.'},
    zh:{title:'多模态 AI',what:'能够同时处理多种信息形式（例如文本与图像），并学习不同模态之间关系的人工智能系统。',examples:'例如视觉语言模型、图像问答、视觉推理以及 LLaVA 等系统。',relevance:'Frederick 在加州大学圣克鲁兹分校暑期科研期间学习过视觉语言模型和多模态架构。'}
  },
  nlp:{
    en:{title:'Natural Language Processing (NLP)',what:'The area of AI concerned with helping computers analyze, represent, and work with human language.',examples:'Examples include text classification, information extraction, sentiment analysis, moderation, and language-model applications.',relevance:'Frederick’s offensive-speech detection research involves reviewing transformer-based hate-speech detection and organizing datasets for supervised classification.'},
    zh:{title:'自然语言处理（NLP）',what:'人工智能中让计算机分析、表示和处理人类语言的领域。',examples:'常见任务包括文本分类、信息抽取、情感分析、内容审核和语言模型应用。',relevance:'Frederick 的冒犯性言论检测研究涉及 Transformer 仇恨言论检测文献以及监督分类数据集整理。'}
  }
};

function loadConfiguredAnalytics(){
  const a=siteConfig.analytics;if(!a||!a.provider||!a.scriptSrc)return;
  if(document.querySelector('script[data-fk-analytics]'))return;
  const sc=document.createElement('script');sc.defer=true;sc.src=a.scriptSrc;sc.dataset.fkAnalytics=a.provider;
  if(a.provider==='plausible'&&a.domain){sc.setAttribute('data-domain',a.domain);window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments);};}
  if(a.provider==='umami'&&a.websiteId)sc.setAttribute('data-website-id',a.websiteId);
  document.head.appendChild(sc);
}

function trackEvent(name, detail={}){
  try{
    const key=siteConfig.analyticsStorageKey;
    const data=JSON.parse(localStorage.getItem(key)||'{}');
    data[name]=(data[name]||0)+1;
    data.last={name,detail,at:new Date().toISOString()};
    localStorage.setItem(key,JSON.stringify(data));
  }catch(_){ }
  try{
    if(siteConfig.analytics?.provider==='plausible'&&window.plausible)window.plausible(name,{props:detail});
    if(siteConfig.analytics?.provider==='umami'&&window.umami?.track)window.umami.track(name,detail);
  }catch(_){ }
}

function renderPublications(){
  const sec=document.querySelector('[data-publications-section]');
  const list=document.querySelector('[data-publication-list]');
  const nav=document.querySelector('[data-publications-nav]');
  if(!sec||!list)return;
  if(!publications.length){sec.hidden=true;if(nav)nav.hidden=true;return;}
  const lang=currentLang(); sec.hidden=false;if(nav)nav.hidden=false;
  list.innerHTML=publications.map((p,i)=>{
    const links=[p.paper&&`<a href="${p.paper}" target="_blank" rel="noopener">Paper</a>`,p.code&&`<a href="${p.code}" target="_blank" rel="noopener">Code</a>`,p.doi&&`<a href="${p.doi}" target="_blank" rel="noopener">DOI</a>`,p.arxiv&&`<a href="${p.arxiv}" target="_blank" rel="noopener">arXiv</a>`,p.bibtex&&`<button type="button" data-copy-bib="${i}">Cite</button>`].filter(Boolean).join('');
    return `<article class="publication-item"><div class="publication-year">${p.year||''}</div><div><span class="publication-status">${p.status||''}</span><h3>${p.title||''}</h3><p>${p.authors||''}</p><p class="publication-venue">${p.venue||''}</p><div class="publication-actions">${links}</div></div></article>`;
  }).join('');
  list.querySelectorAll('[data-copy-bib]').forEach(b=>b.addEventListener('click',async()=>{const p=publications[+b.dataset.copyBib];if(!p?.bibtex)return;await navigator.clipboard.writeText(p.bibtex);showToast(lang==='zh'?'BibTeX 已复制':'BibTeX copied');trackEvent('publication_cite',{title:p.title});}));
}

function ensureFocusModal(){
  let modal=document.querySelector('.focus-modal'); if(modal)return modal;
  modal=document.createElement('div');modal.className='focus-modal';modal.setAttribute('aria-hidden','true');
  modal.innerHTML=`<div class="focus-modal-backdrop" data-focus-close></div><section class="focus-modal-panel" role="dialog" aria-modal="true" aria-labelledby="focusModalTitle"><div class="focus-modal-head"><div><span class="focus-modal-kicker">Research focus</span><h2 id="focusModalTitle"></h2></div><button type="button" class="focus-modal-close" data-focus-close aria-label="Close">×</button></div><div class="focus-modal-body"><div><span>What it is</span><p data-focus-what></p></div><div><span>What people study</span><p data-focus-examples></p></div><div><span>Why it appears here</span><p data-focus-relevance></p></div></div></section>`;
  document.body.appendChild(modal);modal.querySelectorAll('[data-focus-close]').forEach(x=>x.addEventListener('click',closeFocusModal));return modal;
}
let lastFocusBeforeDialog=null;
function openFocusModal(key){const data=focusGlossary[key]?.[currentLang()];if(!data)return;const m=ensureFocusModal();lastFocusBeforeDialog=document.activeElement;m.dataset.focus=key;m.querySelector('#focusModalTitle').textContent=data.title;m.querySelector('[data-focus-what]').textContent=data.what;m.querySelector('[data-focus-examples]').textContent=data.examples;m.querySelector('[data-focus-relevance]').textContent=data.relevance;m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');setTimeout(()=>m.querySelector('.focus-modal-close')?.focus(),10);trackEvent('focus_topic_open',{topic:key});}
function closeFocusModal(){const m=document.querySelector('.focus-modal');if(!m)return;m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');lastFocusBeforeDialog?.focus?.();}
function bindFocusGlossary(){document.querySelectorAll('[data-focus]').forEach(b=>b.addEventListener('click',()=>openFocusModal(b.dataset.focus)));}

function configureAcademicLinks(){const s=document.querySelector('[data-scholar-link]'),o=document.querySelector('[data-orcid-link]');if(s&&siteConfig.scholarUrl){s.href=siteConfig.scholarUrl;s.hidden=false}if(o&&siteConfig.orcidUrl){o.href=siteConfig.orcidUrl;o.hidden=false}}

function trapFocus(e){
  if(e.key!=='Tab')return;
  const dialog=[...document.querySelectorAll('[role="dialog"]')].reverse().find(d=>d.closest('.open,[aria-hidden="false"]'));
  if(!dialog)return;
  const f=[...dialog.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),iframe,[tabindex]:not([tabindex="-1"])')].filter(x=>!x.hidden&&x.offsetParent!==null);
  if(!f.length)return;const first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
}
function bindAccessibilityV28(){document.addEventListener('keydown',e=>{trapFocus(e);if(e.key==='Escape')closeFocusModal();});document.querySelectorAll('.avatar-bubble').forEach(x=>x.setAttribute('aria-live','polite'));}

function bindPrivacyAnalytics(){
  loadConfiguredAnalytics();
  trackEvent('page_view',{page});
  document.querySelectorAll('[data-project-open]').forEach(x=>x.addEventListener('click',()=>trackEvent('project_open',{project:x.dataset.projectOpen})));
  document.querySelectorAll('.cv-link,[data-cv-open],[data-cv-download]').forEach(x=>x.addEventListener('click',()=>trackEvent('cv_interaction',{kind:x.hasAttribute('download')?'download':'open'})));document.querySelectorAll('[data-project-report-open],[data-project-report-download]').forEach(x=>x.addEventListener('click',()=>trackEvent('project_report_file',{kind:x.hasAttribute('download')?'download':'open'})));
  document.querySelectorAll('a[href^="mailto:"]').forEach(x=>x.addEventListener('click',()=>trackEvent('email_click')));
}

// keep publication visibility synchronized after language changes as well
window.addEventListener('languagechange-fk',()=>{renderPublications();syncProjectReportPreviewLanguage();const open=document.querySelector('.focus-modal.open');if(open?.dataset.focus){const k=open.dataset.focus;const data=focusGlossary[k]?.[currentLang()];if(data){open.querySelector('#focusModalTitle').textContent=data.title;open.querySelector('[data-focus-what]').textContent=data.what;open.querySelector('[data-focus-examples]').textContent=data.examples;open.querySelector('[data-focus-relevance]').textContent=data.relevance;}}});

bindFocusGlossary();configureAcademicLinks();renderPublications();bindAccessibilityV28();bindPrivacyAnalytics();bindProjectReportPreview();


/* ============================================================
   v30 — premium field visuals, publication preview, filters & polish
   ============================================================ */
const V30_FIELD_IMAGES={
  knowyourbody:{src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Doctor_stands_in_clinic_holding_tablet_and_discussing_with_patient.jpg?width=1400',fallback:'assets/project-knowyourbody.webp',credit:'Nenad Stojković · CC BY 2.0'},
  smartbot:{src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/New_Alma_Hospital_Reception.jpg?width=1400',fallback:'assets/project-smartbot.webp',credit:'Drnabeelmohdkk1 · CC0'}
};
projectDetails.knowyourbody.image=V30_FIELD_IMAGES.knowyourbody.src;
projectDetails.smartbot.image=V30_FIELD_IMAGES.smartbot.src;

function bindFieldReferenceImages(){
  document.querySelectorAll('img[data-field-src]').forEach(img=>{
    const remote=img.dataset.fieldSrc, fallback=img.dataset.fallback||img.getAttribute('src');
    if(!remote)return;
    const pre=new Image();
    const visual=img.closest('figure,.about-feature-visual');
    pre.onload=()=>{img.src=remote; img.classList.add('field-image-loaded');visual?.classList.add('has-field-image');visual?.classList.remove('field-fallback');};
    pre.onerror=()=>{img.src=fallback; img.classList.add('field-image-fallback');visual?.classList.add('field-fallback');visual?.classList.remove('has-field-image');};
    pre.src=remote;
  });
}

function syncV30Copy(){
  const lang=currentLang();
  document.querySelectorAll('[data-copy-en][data-copy-zh]').forEach(el=>{el.textContent=lang==='zh'?el.dataset.copyZh:el.dataset.copyEn;});
}

function bindTimelineFilters(){
  const bars=[...document.querySelectorAll('.timeline-filter-bar')];
  bars.forEach(bar=>{
    const timeline=bar.nextElementSibling;
    if(!timeline?.matches('[data-academic-timeline]'))return;
    const buttons=[...bar.querySelectorAll('[data-timeline-filter]')];
    const items=[...timeline.querySelectorAll('.timeline-item[data-timeline-category]')];
    const apply=filter=>{
      buttons.forEach(b=>{const on=b.dataset.timelineFilter===filter;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
      items.forEach(item=>{
        const cats=(item.dataset.timelineCategory||'').split(/\s+/);
        const show=filter==='all'||cats.includes(filter);
        item.hidden=!show;
        if(!show){item.classList.remove('is-expanded','is-preview');item.querySelector('.timeline-trigger')?.setAttribute('aria-expanded','false');}
      });
    };
    buttons.forEach(b=>b.addEventListener('click',()=>apply(b.dataset.timelineFilter)));
    apply('all');
  });
}

function publicationEscape(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function renderPublications(){
  const sec=document.querySelector('[data-publications-section]');
  const list=document.querySelector('[data-publication-list]');
  const nav=document.querySelector('[data-publications-nav]');
  if(!sec||!list)return;
  if(!publications.length){sec.hidden=true;if(nav)nav.hidden=true;return;}
  sec.hidden=false;if(nav)nav.hidden=false;
  const lang=currentLang();
  list.innerHTML=publications.map((p,i)=>{
    const abstract=p.abstract||p.abstractShort||'';
    const links=[
      p.paper&&`<a href="${publicationEscape(p.paper)}" target="_blank" rel="noopener">Paper</a>`,
      p.code&&`<a href="${publicationEscape(p.code)}" target="_blank" rel="noopener">Code</a>`,
      p.doi&&`<a href="${publicationEscape(p.doi)}" target="_blank" rel="noopener">DOI</a>`,
      p.arxiv&&`<a href="${publicationEscape(p.arxiv)}" target="_blank" rel="noopener">arXiv</a>`,
      (p.citation||p.bibtex)&&`<button type="button" data-copy-citation="${i}">${lang==='zh'?'复制引用':'Cite'}</button>`,
      p.bibtex&&`<button type="button" data-copy-bib="${i}">BibTeX</button>`
    ].filter(Boolean).join('');
    return `<article class="publication-item publication-premium">
      <div class="publication-year">${publicationEscape(p.year||'')}</div>
      <div class="publication-content">
        <div class="publication-topline"><span class="publication-status">${publicationEscape(p.status||'')}</span>${p.venue?`<span class="publication-venue-inline">${publicationEscape(p.venue)}</span>`:''}</div>
        <h3>${publicationEscape(p.title||'')}</h3>
        <p class="publication-authors">${publicationEscape(p.authors||'')}</p>
        ${abstract?`<p class="publication-abstract">${publicationEscape(abstract)}</p>`:''}
        <div class="publication-actions">${links}</div>
      </div>
    </article>`;
  }).join('');
  list.querySelectorAll('[data-copy-citation]').forEach(b=>b.addEventListener('click',async()=>{const p=publications[+b.dataset.copyCitation];const val=p?.citation||p?.bibtex;if(!val)return;await navigator.clipboard.writeText(val);showToast(lang==='zh'?'引用已复制':'Citation copied');trackEvent('publication_citation_copy',{title:p.title});}));
  list.querySelectorAll('[data-copy-bib]').forEach(b=>b.addEventListener('click',async()=>{const p=publications[+b.dataset.copyBib];if(!p?.bibtex)return;await navigator.clipboard.writeText(p.bibtex);showToast(lang==='zh'?'BibTeX 已复制':'BibTeX copied');trackEvent('publication_bibtex_copy',{title:p.title});}));
}

// Patch project modal visual with reliable local fallback when external field photography fails.
const _v30RenderProjectModal=renderProjectModal;
renderProjectModal=function(key){
  _v30RenderProjectModal(key);
  const modal=document.querySelector('.project-modal'); const img=modal?.querySelector('.project-modal-visual img'); const f=V30_FIELD_IMAGES[key];
  if(img&&f){img.onerror=()=>{img.onerror=null;img.src=f.fallback;};modal.querySelector('.project-modal-visual figcaption').textContent=currentLang()==='zh'?'领域场景参考 · 非项目输出':'Field reference · not a project output';}
};

// Dedicated dark/light browser bar color.
function syncThemeChrome(){
  const m=document.querySelector('meta[name="theme-color"]');if(!m)return;
  m.content=document.documentElement.dataset.theme==='dark'?'#12100f':'#f4efe6';
}
const _v30ThemeObserver=new MutationObserver(syncThemeChrome);_v30ThemeObserver.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});syncThemeChrome();

window.addEventListener('languagechange-fk',()=>{syncV30Copy();renderPublications();});
bindFieldReferenceImages();bindTimelineFilters();syncV30Copy();renderPublications();
