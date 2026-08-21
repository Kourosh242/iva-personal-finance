"use strict";

const seed={
  transactions:[
    {id:1,title:"حقوق ماهانه",category:"درآمد",account:"حساب سامان",date:"۱ مرداد",amount:48500000,type:"income"},
    {id:2,title:"خرید سوپرمارکت",category:"خوراک",account:"کارت ملت",date:"امروز",amount:-1280000,type:"expense"},
    {id:3,title:"اجاره خانه",category:"مسکن",account:"حساب سامان",date:"۱ مرداد",amount:-12000000,type:"expense"},
    {id:4,title:"پروژه فریلنسری",category:"درآمد",account:"کیف پول ارزی",date:"۲۸ تیر",amount:9200000,type:"income"},
    {id:5,title:"اشتراک اینترنت",category:"قبوض",account:"کارت ملت",date:"۳۰ تیر",amount:-420000,type:"expense"}
  ],
  accounts:[
    {id:1,name:"حساب سامان",amount:82540000,meta:"سپرده بانکی · ۸۴۱۲",color:"#6756e8"},
    {id:2,name:"کارت ملت",amount:38750000,meta:"کارت بانکی · ۲۰۹۸",color:"#1599ca"},
    {id:3,name:"کیف پول نقدی",amount:5550000,meta:"وجه نقد",color:"#10bfa4"}
  ],
  budgets:[
    {id:1,name:"مسکن",amount:15000000,meta:"۱۲,۰۰۰,۰۰۰ مصرف شده",progress:80,color:"#6756e8"},
    {id:2,name:"خوراک",amount:8000000,meta:"۴,۳۵۰,۰۰۰ مصرف شده",progress:54,color:"#10bfa4"},
    {id:3,name:"حمل‌ونقل",amount:4500000,meta:"۲,۱۰۰,۰۰۰ مصرف شده",progress:47,color:"#ff936e"},
    {id:4,name:"تفریح",amount:3000000,meta:"۲,۷۰۰,۰۰۰ مصرف شده",progress:90,color:"#f1b83f"}
  ],
  goals:[
    {id:1,name:"سفر به ژاپن",amount:200000000,meta:"۱۳۶,۰۰۰,۰۰۰ پس‌انداز شده",progress:68,color:"#6756e8"},
    {id:2,name:"خرید لپ‌تاپ",amount:90000000,meta:"۵۴,۰۰۰,۰۰۰ پس‌انداز شده",progress:60,color:"#10bfa4"},
    {id:3,name:"صندوق اضطراری",amount:150000000,meta:"۱۱۲,۵۰۰,۰۰۰ پس‌انداز شده",progress:75,color:"#1599ca"}
  ],
  debts:[
    {id:1,name:"قسط وام مسکن",amount:-6800000,meta:"سررسید ۵ شهریور · ماهانه"},
    {id:2,name:"طلب از علی",amount:12500000,meta:"سررسید ۲۰ شهریور"},
    {id:3,name:"قسط خرید لپ‌تاپ",amount:-4200000,meta:"۳ قسط باقی‌مانده"}
  ]
};

const words={
  fa:{overview:"نمای کلی",transactions:"تراکنش‌ها",accounts:"حساب‌ها",budgets:"بودجه‌ها",goals:"اهداف",debts:"بدهی و طلب",reports:"گزارش‌ها",settings:"تنظیمات",newTransaction:"تراکنش جدید",hello:"سلام",sub:"کنترل کامل زندگی مالی، ساده و امن."},
  en:{overview:"Overview",transactions:"Transactions",accounts:"Accounts",budgets:"Budgets",goals:"Goals",debts:"Debts & Loans",reports:"Reports",settings:"Settings",newTransaction:"New transaction",hello:"Hello",sub:"Complete control of your money, simple and private."}
};

let state=loadData(),page="overview",lang=localStorage.getItem("iva-lang")||"fa",modalType="transaction",userName=localStorage.getItem("iva-user-name")||"";
const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const app=$("#app"),content=$("#page-content"),backdrop=$("#modal-backdrop"),form=$("#item-form");

function clone(value){return JSON.parse(JSON.stringify(value))}
function loadData(){try{return JSON.parse(localStorage.getItem("iva-vanilla-data"))||clone(seed)}catch{return clone(seed)}}
function saveData(){localStorage.setItem("iva-vanilla-data",JSON.stringify(state))}
function money(value){return new Intl.NumberFormat(lang==="fa"?"fa-IR":"en-US").format(Math.abs(value))}
function toast(message){const el=$("#toast");el.textContent="✓ "+message;el.hidden=false;setTimeout(()=>el.hidden=true,2300)}
function stats(){
  const income=state.transactions.filter(x=>x.amount>0).reduce((a,b)=>a+b.amount,0);
  const expense=Math.abs(state.transactions.filter(x=>x.amount<0).reduce((a,b)=>a+b.amount,0));
  const net=state.accounts.reduce((a,b)=>a+b.amount,0);
  return {income,expense,net,saving:income-expense}
}
function statCards(){
  const s=stats(),items=[["دارایی خالص",s.net,"◈"],["درآمد این ماه",s.income,"↙"],["هزینه این ماه",s.expense,"↗"],["پس‌انداز ماه",s.saving,"◇"]];
  return `<section class="stats">${items.map((x,i)=>`<article class="stat ${i===0?"hero":""}"><div class="stat-label"><span class="stat-icon">${x[2]}</span>${x[0]}</div><strong>${money(x[1])}<small>تومان</small></strong><div class="trend">↗ ۱۲.۵٪ <span>نسبت به ماه قبل</span></div></article>`).join("")}</section>`;
}
function transactionTable(list=state.transactions){
  return `<article class="card"><div class="toolbar"><label class="search">⌕<input id="tx-search" placeholder="جستجو در تراکنش‌ها..."></label><button class="secondary" id="csv-export">خروجی CSV</button><button class="primary" data-open="transaction">＋ تراکنش جدید</button></div><div class="table-wrap"><div class="table-head"><span>شرح</span><span>دسته</span><span>حساب</span><span>تاریخ</span><span>مبلغ</span></div><div id="tx-rows">${transactionRows(list)}</div></div></article>`;
}
function transactionRows(list){return list.map(x=>`<div class="table-row"><span><i class="tx-icon">${x.type==="income"?"↙":"↗"}</i><b>${x.title}</b></span><span>${x.category}</span><span>${x.account}</span><span>${x.date}</span><strong class="${x.amount>0?"positive":"negative"}">${x.amount>0?"+":"−"}${money(x.amount)}</strong></div>`).join("")}
function collection(key,title,subtitle){
  const icons={accounts:"▣",budgets:"◔",goals:"◎",debts:"⇄"};
  return `<div class="page-head"><div><h2>${title}</h2><p>${subtitle}</p></div><button class="primary" data-open="${key.slice(0,-1)}">＋ افزودن</button></div><section class="collection">${state[key].map(x=>`<article class="card item-card"><div class="item-icon" style="background:${x.color||"#6756e8"}">${icons[key]}</div><div class="item-main"><h3>${x.name}</h3><p>${x.meta}</p>${x.progress!==undefined?`<div class="progress"><i style="width:${x.progress}%;background:${x.color}"></i></div>`:""}</div><div class="item-amount"><b class="${x.amount<0?"negative":""}">${x.amount<0?"−":""}${money(x.amount)}</b><small>تومان</small>${x.progress!==undefined?`<em>${x.progress}٪</em>`:""}</div></article>`).join("")}</section>`;
}
function overview(){
  const s=stats();
  return statCards()+`<section class="quick"><h2>دسترسی سریع</h2><div><button data-open="transaction"><i>＋</i>تراکنش</button><button data-open="account"><i>▣</i>حساب جدید</button><button data-open="budget"><i>◔</i>بودجه</button><button data-open="goal"><i>◎</i>هدف جدید</button></div></section><section class="grid"><article class="card"><div class="card-head"><div><h2>جریان نقدی</h2><p>شش ماه اخیر</p></div></div><div class="bars">${[52,68,57,82,70,92].map((h,i)=>`<div><i style="height:${h}%"></i><em style="height:${h*.45}%"></em><span>${["اسفند","فروردین","اردیبهشت","خرداد","تیر","مرداد"][i]}</span></div>`).join("")}</div></article><article class="card"><div class="card-head"><h2>تقسیم هزینه‌ها</h2></div><div class="donut"><div><strong>${money(s.expense).slice(0,5)}</strong><small>تومان هزینه</small></div></div><div class="legend">${[["مسکن","۳۸٪","#6756e8"],["خوراک","۲۴٪","#10bfa4"],["حمل‌ونقل","۱۷٪","#ff9871"],["سایر","۲۱٪","#ffcf5d"]].map(x=>`<p><span><i style="background:${x[2]}"></i>${x[0]}</span><b>${x[1]}</b></p>`).join("")}</div></article></section><section class="grid">${transactionTable(state.transactions.slice(0,4))}<aside><article class="card insight"><i>✦</i><div><b>نکته هوشمند آیوا</b><p>با کاهش ۱۰٪ هزینه تفریح، ۷ ماه زودتر به هدف سفر می‌رسی.</p></div></article></aside></section>`;
}
function reports(){
 return `<div class="page-head"><div><h2>گزارش‌های مالی</h2><p>تحلیل درآمد، هزینه و روند دارایی</p></div><button class="secondary" id="csv-export">خروجی CSV</button></div>${statCards()}<section class="report-grid" style="margin-top:17px"><article class="card"><div class="card-head"><h2>عملکرد پنج ماه اخیر</h2></div><div class="bars">${[48,63,55,78,70].map((h,i)=>`<div><i style="height:${h}%"></i><em style="height:${h*.52}%"></em><span>${["فروردین","اردیبهشت","خرداد","تیر","مرداد"][i]}</span></div>`).join("")}</div></article><article class="card"><div class="card-head"><h2>خلاصه عملکرد</h2></div><div class="setting-row"><span>نرخ پس‌انداز</span><b>۶۷.۹٪</b></div><div class="setting-row"><span>میانگین هزینه روزانه</span><b>۶۱۵ هزار</b></div><div class="setting-row"><span>بیشترین هزینه</span><b>مسکن</b></div><div class="setting-row"><span>رشد دارایی</span><b class="positive">+۱۲.۵٪</b></div></article></section>`;
}
function settings(){
 return `<div class="page-head"><div><h2>تنظیمات</h2><p>شخصی‌سازی، حریم خصوصی و داده‌ها</p></div></div><article class="card settings"><div class="setting-row"><div><b>نام نمایشی</b><small id="current-name"></small></div><button id="change-name">تغییر نام</button></div><div class="setting-row"><div><b>حالت تاریک</b><small>ظاهر برنامه</small></div><button id="setting-theme">تغییر پوسته</button></div><div class="setting-row"><div><b>زبان رابط</b><small>فارسی / English</small></div><button id="setting-lang">${lang==="fa"?"English":"فارسی"}</button></div><div class="setting-row"><div><b>واحد پول</b><small>پیش‌فرض برنامه</small></div><select><option>تومان</option><option>ریال</option><option>USD</option></select></div><div class="setting-row"><div><b>پشتیبان‌گیری</b><small>دریافت تمام اطلاعات</small></div><button id="backup">دانلود JSON</button></div><button class="danger" id="reset">بازنشانی داده‌های نمونه</button></article>`;
}
function render(){
 const w=words[lang];$$("[data-i18n]").forEach(el=>el.textContent=w[el.dataset.i18n]);
 document.documentElement.lang=lang;document.documentElement.dir=lang==="fa"?"rtl":"ltr";$("#lang-toggle").textContent=lang==="fa"?"EN":"فا";
 const titles={overview:`${w.hello} ${userName||""}، ${lang==="fa"?"خوش آمدی 👋":"welcome 👋"}`,transactions:w.transactions,accounts:w.accounts,budgets:w.budgets,goals:w.goals,debts:w.debts,reports:w.reports,settings:w.settings};
 $("#page-title").textContent=titles[page];$("#page-subtitle").textContent=page==="overview"?w.sub:"پلتفرم حسابداری شخصی IVA";$("#profile-name").textContent=userName||"کاربر IVA";$("#profile-avatar").textContent=(userName||"ک").trim().charAt(0);
 if(page==="overview")content.innerHTML=overview();
 if(page==="transactions")content.innerHTML=`<div class="page-head"><div><h2>تمام تراکنش‌ها</h2><p>جستجو، مدیریت و خروجی اطلاعات</p></div></div>`+transactionTable();
 if(page==="accounts")content.innerHTML=collection("accounts","حساب‌ها و کیف پول‌ها","بانک، کارت، کیف پول و وجه نقد");
 if(page==="budgets")content.innerHTML=collection("budgets","بودجه‌های ماهانه","سقف هزینه هر دسته را کنترل کنید");
 if(page==="goals")content.innerHTML=collection("goals","اهداف مالی","برای رویاها برنامه مالی بسازید");
 if(page==="debts")content.innerHTML=collection("debts","بدهی‌ها و مطالبات","اقساط، بدهی و طلب‌ها");
 if(page==="reports")content.innerHTML=reports();
 if(page==="settings")content.innerHTML=settings();
 bindDynamic();
}
function bindDynamic(){
 $$("[data-open]").forEach(btn=>btn.onclick=()=>openModal(btn.dataset.open));
 const search=$("#tx-search");if(search)search.oninput=()=>$("#tx-rows").innerHTML=transactionRows(state.transactions.filter(x=>(x.title+x.category+x.account).toLowerCase().includes(search.value.toLowerCase())));
 const csv=$("#csv-export");if(csv)csv.onclick=exportCSV;
 const currentName=$("#current-name");if(currentName)currentName.textContent=userName||"تنظیم نشده";
 const changeName=$("#change-name");if(changeName)changeName.onclick=()=>{$("#welcome-backdrop").hidden=false;$("#welcome-name").value=userName;$("#welcome-name").focus()};
 const st=$("#setting-theme");if(st)st.onclick=toggleTheme;
 const sl=$("#setting-lang");if(sl)sl.onclick=toggleLang;
 const backup=$("#backup");if(backup)backup.onclick=exportBackup;
 const reset=$("#reset");if(reset)reset.onclick=()=>{localStorage.removeItem("iva-vanilla-data");state=clone(seed);saveData();render();toast("اطلاعات بازنشانی شد")};
}
function openModal(type){modalType=type;$("#modal-title").textContent=type==="transaction"?"ثبت تراکنش جدید":"افزودن مورد جدید";$("#type-field").hidden=type!=="transaction";backdrop.hidden=false;form.elements.title.focus()}
function closeModal(){backdrop.hidden=true;form.reset()}
function toggleTheme(){app.classList.toggle("dark");const dark=app.classList.contains("dark");localStorage.setItem("iva-theme",dark?"dark":"light");$("#theme-toggle").textContent=dark?"☀":"☾"}
function toggleLang(){lang=lang==="fa"?"en":"fa";localStorage.setItem("iva-lang",lang);render()}
function exportCSV(){const rows=[["Title","Category","Account","Date","Amount"],...state.transactions.map(x=>[x.title,x.category,x.account,x.date,x.amount])];download("\uFEFF"+rows.map(x=>x.join(",")).join("\n"),"iva-transactions.csv","text/csv")}
function exportBackup(){download(JSON.stringify(state,null,2),"iva-backup.json","application/json")}
function download(data,name,type){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([data],{type}));a.download=name;a.click();URL.revokeObjectURL(a.href)}

$("#navigation").onclick=e=>{const btn=e.target.closest("[data-page]");if(!btn)return;page=btn.dataset.page;$$(".nav-item").forEach(x=>x.classList.toggle("active",x===btn));render()};
$(".brand").onclick=e=>{e.preventDefault();page="overview";$$(".nav-item").forEach((x,i)=>x.classList.toggle("active",i===0));render()};
$("#theme-toggle").onclick=toggleTheme;$("#lang-toggle").onclick=toggleLang;$("#modal-close").onclick=closeModal;$("#modal-cancel").onclick=closeModal;
backdrop.onclick=e=>{if(e.target===backdrop)closeModal()};
$("#welcome-form").onsubmit=e=>{e.preventDefault();userName=$("#welcome-name").value.trim();localStorage.setItem("iva-user-name",userName);$("#welcome-backdrop").hidden=true;render();toast(`خوش آمدی ${userName}`)};
form.onsubmit=e=>{e.preventDefault();const data=new FormData(form),title=data.get("title"),amount=Number(data.get("amount")),id=Date.now();if(modalType==="transaction"){const type=data.get("type");state.transactions.unshift({id,title,amount:type==="income"?amount:-amount,type,category:type==="income"?"درآمد":"سایر",account:"حساب سامان",date:"همین حالا"})}else{const keys={account:"accounts",budget:"budgets",goal:"goals",debt:"debts"},key=keys[modalType];state[key].push({id,name:title,amount,meta:"تازه ایجاد شده",progress:key==="budgets"||key==="goals"?0:undefined,color:"#6756e8"})}saveData();closeModal();render();toast("با موفقیت ذخیره شد")};

if(localStorage.getItem("iva-theme")==="dark")toggleTheme();render();if(!userName){$("#welcome-backdrop").hidden=false;setTimeout(()=>$("#welcome-name").focus(),50)}
