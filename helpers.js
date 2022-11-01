const libraries = [
  {
    name: "مكتبة جوهرة الخزانة للكتاب المستعمل",
    phone: "053 202 2559",
    map: "https://maps.app.goo.gl/kx4sd75srD3WNLbD9?g_st=ic",
  },

  {
    name: "مكتبة الجامعة للكتاب المستعمل",
    phone: "050 256 3648",
    map: "https://maps.app.goo.gl/Th9g4rMWSUZDcogLA?g_st=ic",
  },

  {
    name: "مكتبة الشنقيطي لبيع الكتب",
    phone: "050 439 5716",
    map: "https://maps.app.goo.gl/d3LCr8HrWDPK4JRp7?g_st=ic",
  },
  {
    name: "مكتبة دار ابن الجوزي للنشر والتوزيع",
    phone: "058 301 7951",
    map: "https://maps.app.goo.gl/5yt4tkMqZT7MAXAPA?g_st=ic",
  },

  {
    name: "مركز افنان للكتب المدرسية والقرطاسية",
    phone: "012 619 0025",
    map: "https://maps.app.goo.gl/HsvoXVamQC8q6c9w7?g_st=ic",
  },

  {
    name: "مكتبة النبراس الذهبية",
    phone: "050 019 5800",
    map: "https://maps.app.goo.gl/wkiYdB9AC45RgRt88?g_st=ic",
  },

  {
    name: "مكتبة يوسف الغامدي",
    phone: "050 012 0156",
    map: "https://maps.app.goo.gl/S6QroYQh6J5jnYWo7?g_st=ic",
  },

  {
    name: "مكتبة كنوز المعرفة",
    phone: "012 651 0421",
    map: "https://maps.google.com?g_st=ic",
  },
  {
    name: "مكتبة الفريد",
    phone: "050 363 1798",
    map: "https://maps.app.goo.gl/u22vC6arixT3itCPA?g_st=ic",
  },
  {
    name: "قرطاسية أريج",
    phone: "057 800 2132",
    map: "https://maps.google.com?g_st=ic",
  },
  {
    name: "مكتبة المريخ",
    phone: "012 652 4935",
    map: "https://maps.app.goo.gl/4abUkCekEbTFZi2B9?g_st=ic",
  },
  {
    name: "مكتبة دار السلام",
    phone: "053 039 8859",
    map: "https://maps.app.goo.gl/29MJKb5rVch13UG1A?g_st=ic",
  },

  {
    name: "مكتبة الرشد - فرع جدة",
    phone: "053 049 2176",
    map: "https://maps.google.com?g_st=ic",
  },

  {
    name: "مكتبة دي بي ان بي",
    phone: "054 353 8862",
    map: "https://maps.app.goo.gl/ntwEh7xRHCiosUM98?g_st=ic",
  },

  {
    name: "مكتبه الشقيري",
    phone: null,
    map: "https://maps.app.goo.gl/cGyKFaKs485SNhZJ8?g_st=ic",
  },
  {
    name: "مكتبة دار حافظ",
    phone: "055 051 0087",
    map: "https://maps.app.goo.gl/sKWsydsSxbcYmLKf6?g_st=ic",
  },

  {
    name: "قرطاسية القلم",
    phone: "054 293 9118",
    map: "https://maps.app.goo.gl/eCtvAABdtGh2cMA26?g_st=ic",
  },

  {
    name: "مكتبة جهينة",
    phone: "012 688 0086",
    map: "https://maps.app.goo.gl/CHm8CV9ktuaiHP2p6?g_st=ic",
  },

  {
    name: "مكتبة البوادي",
    phone: "054 739 7769",
    map: "https://maps.google.com?g_st=ic",
  },

  {
    name: "مكتبة الإرشاد",
    phone: "054 165 9045",
    map: "https://maps.app.goo.gl/8BK9ZtEg4eXqc8Bi9?g_st=ic",
  },
];

const teachers = [
  {
    name: "أ/ احمد عباس الجعلى",
    mail: "aaljaaly@tvtc.gov.sa",
  },
  {
    name: "أ/ محمد حميد الجحدلى",
    mail: "maljahdali@tvtc.gov.sa",
  },
  {
    name: "أ/ على عايض القرنى",
    mail: "aalgrni@tvtc.gov.sa"
  },
  {
    name: "أ/ على عايض القرنى",
    mail: "aalgrni@tvtc.gov.sa"
  },
  {
    name: "أ/ عبدالمنعم عبدالهادى الشهري",
    mail: "aalshehri17@tvtc.gov.sa"
  },
  {
    name: "أ/ بندر عابد اليوبى",
    mail: "balyoubi@tvtc.gov.sa"
  },
  {
    name: "أ/ مزهر على القحطانى",
    mail: "malqahtani4@tvtc.gov.sa" 
  },
  {
    name: "أ/ سعد عبدالله الغامدى",
    mail: "salghamdi15@tvtc.gov.sa" 
  },
  {
    name: "أ/ عبيد عتيق السميرى",
    mail: "oalsumaire@tvtc.gov.sa"
  },
  {
    name: "أ/ عبدالرحمن عبدالله القرنى",
    mail: "aalqarni@tvtc.gov.sa"
  },
  {
    name: "أ/ أحمد حمود الجهنى",
    mail: "aaljehani@tvtc.gov.sa"
  }
];

function render() {
  const libContainer = document.getElementById("lib");
  libContainer.innerHTML = "";
  for (let i = 0; i < libraries.length; i++) {
    libContainer.innerHTML += `
            <div class="col-lg-4 col-md-6 col-12 mb-3">
               <div class="px-3 py-3 shadow-lg d-flex flex-column justify-content-between box text-decoration-none rounded-3 ">
                  <h4 class="text-main fw-bold ">
                     ${libraries[i].name}
                  </h4>
                  <div>   
                     <a href="${
                       libraries[i].phone
                         ? "tel:+" + libraries[i].phone
                         : "javascript:void(0)"
                     }" class="d-block text-decoration-none text-end py-1" dir="ltr">
                        ${
                          libraries[i].phone
                            ? libraries[i].phone
                            : "غير متوفر رقم هاتف"
                        }
                        </a>
                        <a href="${
                          libraries[i].map
                        }" target="_blank" class="d-block text-decoration-none">
                           إضغط للذهاب للخريطة
                     </a>
                  </div>
               </div>
            </div>
            `;
  }
}

function renderTeachers() {
  const teachersContainer = document.getElementById("teachers");
  teachersContainer.innerHTML = "";
  for (let i = 0; i < teachers.length; i++) {
    teachersContainer.innerHTML += `
            <div class="col-md-6 col-12 mb-3">
                <div class="teachers-main-border p-3 d-flex justify-content-between align-items-center">
                    <div class="w-25"> 
                      <img src="./assets/images/favicon.png" class="teacher-img" alt="">
                    </div>
                    <div class="w-50 d-flex flex-column justify-content-between">
                        <h4 class="text-center">
                           ${teachers[i].name}
                        </h4>
                        <p class="text-center">
                            <a href="mailto:${teachers[i].mail}">${teachers[i].mail}</a>
                        </p>
                    </div>
                    <div class="w-25 d-flex justify-content-end"> 
                      <img src="./assets/images/favicon.png" class="teacher-img" alt="">
                    </div>
                </div>
            </div>
      `;
  }
}
