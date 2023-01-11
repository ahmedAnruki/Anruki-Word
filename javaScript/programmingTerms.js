const termsNumber = document.querySelector(".terms-number");
const inputTerm = document.querySelector(".input-term");
const addButtonTerm = document.querySelector(".add-button");
const deleteButtonTerm = document.querySelector(".delete-button");
const termsBox = document.querySelector(".terms-box");

let arrTerms = [
  "Absolute : مطلق",
  "Access : وصول",
  "Add : يضيف",
  "After : بعد",
  "Air : هواء",
  "Amount : مقدار",
  "Arithmetic : علم الحاسب",
  "Arm :  ذراع",
  "Array : مصفوفة",
  "Assignment : مهمة",
  "Async : غير متزامن",
  "Asynchronous : غير متزامن",
  "Authentication : المصادقة",
  "Await : انتظر",
  "Bad : سيئ",
  "Base : قاعدة",
  "Before : قبل",
  "Black : أسود",
  "Block : سد",
  "Blue : أزرق",
  "Bold : عريض",
  "Boolean : قيمة منطقية",
  "Bootcamp : مخيم التدريب",
  "Bottom : تحت",
  "Box : علبة",
  "Brother : أخ",
  "Brown : بني",
  "Button : زر",
  "Callback : أتصل مرة أخرى",
  "Called : اتصل",
  "Calling : الاتصال",
  "Card : كرت",
  "Catch : قبض على",
  "Center : وسط",
  "Challenge : تحدي",
  "Change : تغير",
  "Check : فحص",
  "Child : طفل",
  "Child : طفل",
  "Children : أطفال",
  "Cleaning : تنظيف",
  "Close : اغلق",
  "Column : عامودي",
  "Completed : مكتمل",
  "Concatenation : سلسلة",
  "Connection : اتصال",
  "Console : وحدة التحكم",
  "Container : حاوي",
  "Content : محتوى",
  "Count : عدد",
  "Create : انشاء",
  "Cross : تعبر",
  "Currency : عملة",
  "Data :  بينات",
  "Daughter : ابنة",
  "Delete : مسح",
  "Direction : اتجاه",
  "Display : عرض",
  "Document : وثيقة",
  "Done : فعله",
  "Doom : الموت",
  "Download : تحميل",
  "Elegant : انيق",
  "Element : عنصر",
  "Else : آخر",
  "Employee : موظف - عامل",
  "Employees : الموظفين",
  "End : نهاية",
  "Energy : قوة - طاقة",
  "Error : خطء",
  "Event : حدث",
  "Every : كل",
  "Example : مثال",
  "Failed : فشل",
  "False : خطأ",
  "Family : عائلة",
  "Father :  والد",
  "Feature : ميزة",
  "Fetch : احضر",
  "Finally : اخيرا",
  "First : الاول",
  "Fixed : سابت",
  "Flex : مرن",
  "Float : يطفو",
  "Folw : تدفق",
  "Form : من",
  "Found : وجد",
  "Fulfilled : استيفاء",
  "Fulfilled : استيفاء",
  "Function : وظيفة",
  "Future : مستقبل",
  "Gap : فارق",
  "Generate : يولد",
  "Get : احصل على",
  "Good : جيد",
  "Grandfather : جد",
  "Grandmother : جدة",
  "Grandson : حفيد",
  "Green : أخضر",
  "Grey : رمادي",
  "Happen : عضة",
  "Height : الطول",
  "Hell : جحيم",
  "Hello : مرحبا",
  "Home : منزل",
  "Hour : ساعة",
  "House :  بيت",
  "Husband : زوج",
  "If : اذا",
  "Include : تضمن",
  "Index : فهرس",
  "Initial : مبدئي",
  "Inside : داخل",
  "Integer : عدد صحيح",
  "Intro : مقدمة",
  "Keyword : الكلمة الرئيسية",
  "Land : ارض",
  "Last : الاخير",
  "Left : يسار",
  "Level : مستوى",
  "Limit : حد",
  "List : قائمة",
  "Log : سجل",
  "Logic : منطق",
  "Lower : ادنى",
  "Lower Case : احرف صغيرا",
  "Make : يجعلون",
  "Match : مطابق",
  "Meeting : لقاء",
  "Message : رسالة",
  "Method : طريقة",
  "More : مزيد",
  "Mother : والدة",
  "Needed : بحاجة",
  "New : جديد",
  "Not : لا",
  "Null : لا شيئ",
  "Number : رقم",
  "Object : كائن",
  "Once : مرا ",
  "Open : افتح",
  "Operation : عملية",
  "Operator : العامل",
  "Orange : برتقالي",
  "Origin : أصل",
  "Output : انتاج",
  "Overflow : تجاوز",
  "Parameter : معامل",
  "Parse : تحليل",
  "Passed : تم الاجتياز",
  "Pending : قيد الانتظار",
  "Photo : صورة",
  "Pink : وردي",
  "Position : مكان ",
  "Price : سعر",
  "Project : مشروع",
  "Promise : وعد",
  "Prototype : النموذج المبدئي",
  "Push : يدفع",
  "Pyramid : هرم",
  "Query : استفسار",
  "Random : عشوائي",
  "Rates-Rate : معادلات-معدل",
  "Read : أقرأ",
  "Reason : سبب",
  "Rece : البرد",
  "Red : أحمر",
  "Reject : رفض",
  "Rejected : مرفوض",
  "Remove : إزالة",
  "Repeat : تكرار",
  "Request : طلب",
  "Resize : تغيير الحجم",
  "Resolve : حل",
  "Response : اجابة",
  "Result : نتيجة",
  "School : مدرسة",
  "Second : ثانيا",
  "Settled : تسوية",
  "Sister : أخت",
  "Size : حجم",
  "Solid : صلب",
  "Son : ابن",
  "Sort : فرز ",
  "Span : يولد",
  "Start : بداية",
  "Status : حالة",
  "Step : خطوة",
  "Story : قصة",
  "String : نص",
  "Sub : فريعة",
  "Substring : سلسلة فرعية",
  "Success : نجاح",
  "Successfully : بنجاح",
  "Synchronous : متزامن",
  "Syntax : بناء جملة",
  "Template : قالب",
  "Text : نص كلامي",
  "That : الذي - التي",
  "Then : ثم",
  "Third : الثالث",
  "This : هذه",
  "Throw : يرمي",
  "Time : وقت",
  "Title : عنوان",
  "Tools : ادوات",
  "Top : فوق",
  "Training : تمرين",
  "Transform : تحول",
  "Transition : انتقال",
  "Translate : يترجم",
  "True : صحيح",
  "Try : محاولة",
  "Type : نوع",
  "Undefined : غير معروف",
  "Upcoming : القادمة",
  "Upper : علوي",
  "Upper Case : احرف كبيرا",
  "Use : يستخدم",
  "User : مستخدم",
  "Value : قيمة",
  "Variable : متغير",
  "Violet : بنفسجي",
  "Waving : تلويح",
  "Weather : الطقس",
  "What : ماذا",
  "White : أبيض",
  "Width : العرض",
  "Wife :  زوجة",
  "Will : سوف",
  "With : بي - مع",
  "Write : اكتب",
  "Yellow : أصفر",
  "Kids : أولاد",
  "Bored : ضجر أو ملل",
  "Calm : هادئ",
  "Delighted : مسرور",
  "Depressed : مكتئب",
  "Disappointed : مخيب للآمال",
  "Disgusted : مقرف",
  "Enthusiastic-Excited : متحمس",
  "Exhausted : منهك",
  "Happy : سعيد",
  "Miserable : بائس",
  "Pleased : مسرور",
  "Relaxed : مسترخ",
  "Sad : حزين",
  "Stressed : مرهق",
  "Surprised : مندهش",
  "Tired : متعب",
  "Worried : قلق",
  "Adventurous : مغامر",
  "Bad-tempered : منفعل",
  "Boring : ممل",
  "Brave .. شجاع",
  "Calm : هادئ",
  "Cautious : حذر",
  "Cheerful : مرح",
  "Clever : ذكي",
  "Confident : واثق من نفسه",
  "Cowardly : جبان",
  "Crazy : مجنون",
  "Dishonest : غير صادق",
  "Easy-going : سهل المعاشرة",
  "Emotional : عاطفي",
  "Friendly : ودود",
  "Funny : مضحك",
  "Generous : كريم",
  "Good-humored : فكاهي",
  "Hard-working : مجتهد",
  "Honest : صادق",
  "Impatient : غير صبور",
  "Impolite : غير مهذب",
  "Impulsive : متهور",
  "Intelligent : ذكي",
  "Introverted : انطوائي",
  "Kind : حنون",
  "Lazy : كسول",
  "Mean : لئيم أو حقير",
  "Modest : متواضع",
  "Moody : متقلب المزاج",
  "Patient : مريض",
  "Polite : مؤدب",
  "Rude : وقح",
  "Sensible.. عاقل وحساس",
  "Sensitive : حساس",
  "Serious : خطير",
  "Shy : خجول",
  "Sophisticated : راقي وأنيق",
  "Stupid : غبي",
  "Talented : موهوب",
  "Unfriendly : عدائي",
  "Witty : بارع",
  "Down to earth : متواضع",
];

//console.log(arrTerms.length);
if (localStorage.getItem("Terms")) {
  arrTerms = localStorage.getItem("Terms").split(",");
  arrOfsorting();
} else {
  setLocalStrTerms(arrTerms);
}

deleteButtonTerm.onclick = () =>
  inputTerm.value !== "" ? (inputTerm.value = "") : false;

addButtonTerm.onclick = function () {
  if (inputTerm.value !== "") {
    takValue(inputTerm.value);
    inputTerm.value = "";
  }
};

termsBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("del")) {
    let x = "";
    x = e.target.parentElement.previousElementSibling.textContent;
    let y = arrTerms.filter((ele) => {
      return ele !== x;
    });
    arrTerms = y;
    setLocalStrTerms(arrTerms);
  }

  if (e.target.classList.contains("edit")) {
    let x = "";
    x = e.target.parentElement.previousElementSibling.textContent;
    inputTerm.value = x;
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
    let y = arrTerms.filter((ele) => {
      return ele !== x;
    });
    arrTerms = y;
    setLocalStrTerms(arrTerms);
  }

  if (localStorage.getItem("Terms")) {
    arrTerms = localStorage.getItem("Terms").split(",");
    arrOfsorting();
  }
});

function takValue(parameter) {
  arrTerms.push(parameter);
  setLocalStrTerms(arrTerms);
  arrOfsorting();
}

function setLocalStrTerms(parameter) {
  localStorage.setItem("Terms", parameter);
}
function arrOfsorting() {
  let arrOfsorting = arrTerms;
  //console.log(`'${arrTerms.join("' ,'")}'`);
  arrOfsorting.sort();
  addTermsToPage(arrOfsorting);
}

function addTermsToPage(parameter) {
  termsBox.innerHTML = "";
  let one = 1;
  parameter.forEach((ele) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const textdiv = document.createElement("div");
    const controls = document.createElement("div");
    const spanEdit = document.createElement("span");
    const spanDelete = document.createElement("i");
    controls.appendChild(spanEdit);
    controls.appendChild(spanDelete);
    controls.className = "controls-spans";
    div.className = "term";
    div.appendChild(p);
    div.appendChild(textdiv);
    div.appendChild(controls);
    p.className = "term-number";
    p.appendChild(document.createTextNode("#" + one++));
    textdiv.className = "text-term";
    textdiv.appendChild(document.createTextNode(ele));
    spanDelete.className = "del";
    spanDelete.appendChild(document.createTextNode("x"));
    spanEdit.className = "fa-solid fa-pen edit";
    termsBox.appendChild(div);
  });
  termsNumber.innerHTML = `I Have ${arrTerms.length} Terms`;
}