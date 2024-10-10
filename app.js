const countryList = {
  AED: { code: "AE", flag: "https://flagcdn.com/ae.svg" },
  AFN: { code: "AF", flag: "https://flagcdn.com/af.svg" },
  XCD: { code: "AG", flag: "https://flagcdn.com/ag.svg" },
  ALL: { code: "AL", flag: "https://flagcdn.com/al.svg" },
  AMD: { code: "AM", flag: "https://flagcdn.com/am.svg" },
  ANG: { code: "AN", flag: "https://flagcdn.com/an.svg" },
  AOA: { code: "AO", flag: "https://flagcdn.com/ao.svg" },
  AQD: { code: "AQ", flag: "https://flagcdn.com/aq.svg" },
  ARS: { code: "AR", flag: "https://flagcdn.com/ar.svg" },
  AUD: { code: "AU", flag: "https://flagcdn.com/au.svg" },
  AZN: { code: "AZ", flag: "https://flagcdn.com/az.svg" },
  BAM: { code: "BA", flag: "https://flagcdn.com/ba.svg" },
  BBD: { code: "BB", flag: "https://flagcdn.com/bb.svg" },
  BDT: { code: "BD", flag: "https://flagcdn.com/bd.svg" },
  XOF: { code: "BE", flag: "https://flagcdn.com/be.svg" },
  BGN: { code: "BG", flag: "https://flagcdn.com/bg.svg" },
  BHD: { code: "BH", flag: "https://flagcdn.com/bh.svg" },
  BIF: { code: "BI", flag: "https://flagcdn.com/bi.svg" },
  BMD: { code: "BM", flag: "https://flagcdn.com/bm.svg" },
  BND: { code: "BN", flag: "https://flagcdn.com/bn.svg" },
  BOB: { code: "BO", flag: "https://flagcdn.com/bo.svg" },
  BRL: { code: "BR", flag: "https://flagcdn.com/br.svg" },
  BSD: { code: "BS", flag: "https://flagcdn.com/bs.svg" },
  NOK: { code: "BV", flag: "https://flagcdn.com/bv.svg" },
  BWP: { code: "BW", flag: "https://flagcdn.com/bw.svg" },
  BYR: { code: "BY", flag: "https://flagcdn.com/by.svg" },
  BZD: { code: "BZ", flag: "https://flagcdn.com/bz.svg" },
  CAD: { code: "CA", flag: "https://flagcdn.com/ca.svg" },
  CDF: { code: "CD", flag: "https://flagcdn.com/cd.svg" },
  XAF: { code: "CF", flag: "https://flagcdn.com/cf.svg" },
  CHF: { code: "CH", flag: "https://flagcdn.com/ch.svg" },
  CLP: { code: "CL", flag: "https://flagcdn.com/cl.svg" },
  CNY: { code: "CN", flag: "https://flagcdn.com/cn.svg" },
  COP: { code: "CO", flag: "https://flagcdn.com/co.svg" },
  CRC: { code: "CR", flag: "https://flagcdn.com/cr.svg" },
  CUP: { code: "CU", flag: "https://flagcdn.com/cu.svg" },
  CVE: { code: "CV", flag: "https://flagcdn.com/cv.svg" },
  CYP: { code: "CY", flag: "https://flagcdn.com/cy.svg" },
  CZK: { code: "CZ", flag: "https://flagcdn.com/cz.svg" },
  DJF: { code: "DJ", flag: "https://flagcdn.com/dj.svg" },
  DKK: { code: "DK", flag: "https://flagcdn.com/dk.svg" },
  DOP: { code: "DO", flag: "https://flagcdn.com/do.svg" },
  DZD: { code: "DZ", flag: "https://flagcdn.com/dz.svg" },
  ECS: { code: "EC", flag: "https://flagcdn.com/ec.svg" },
  EEK: { code: "EE", flag: "https://flagcdn.com/ee.svg" },
  EGP: { code: "EG", flag: "https://flagcdn.com/eg.svg" },
  ETB: { code: "ET", flag: "https://flagcdn.com/et.svg" },
  EUR: { code: "FR", flag: "https://flagcdn.com/fr.svg" },
  FJD: { code: "FJ", flag: "https://flagcdn.com/fj.svg" },
  FKP: { code: "FK", flag: "https://flagcdn.com/fk.svg" },
  GBP: { code: "GB", flag: "https://flagcdn.com/gb.svg" },
  GEL: { code: "GE", flag: "https://flagcdn.com/ge.svg" },
  GGP: { code: "GG", flag: "https://flagcdn.com/gg.svg" },
  GHS: { code: "GH", flag: "https://flagcdn.com/gh.svg" },
  GIP: { code: "GI", flag: "https://flagcdn.com/gi.svg" },
  GMD: { code: "GM", flag: "https://flagcdn.com/gm.svg" },
  GNF: { code: "GN", flag: "https://flagcdn.com/gn.svg" },
  GTQ: { code: "GT", flag: "https://flagcdn.com/gt.svg" },
  GYD: { code: "GY", flag: "https://flagcdn.com/gy.svg" },
  HKD: { code: "HK", flag: "https://flagcdn.com/hk.svg" },
  HNL: { code: "HN", flag: "https://flagcdn.com/hn.svg" },
  HRK: { code: "HR", flag: "https://flagcdn.com/hr.svg" },
  HTG: { code: "HT", flag: "https://flagcdn.com/ht.svg" },
  HUF: { code: "HU", flag: "https://flagcdn.com/hu.svg" },
  IDR: { code: "ID", flag: "https://flagcdn.com/id.svg" },
  ILS: { code: "IL", flag: "https://flagcdn.com/il.svg" },
  INR: { code: "IN", flag: "https://flagcdn.com/in.svg" },
  IQD: { code: "IQ", flag: "https://flagcdn.com/iq.svg" },
  IRR: { code: "IR", flag: "https://flagcdn.com/ir.svg" },
  ISK: { code: "IS", flag: "https://flagcdn.com/is.svg" },
  JMD: { code: "JM", flag: "https://flagcdn.com/jm.svg" },
  JOD: { code: "JO", flag: "https://flagcdn.com/jo.svg" },
  JPY: { code: "JP", flag: "https://flagcdn.com/jp.svg" },
  KES: { code: "KE", flag: "https://flagcdn.com/ke.svg" },
  KGS: { code: "KG", flag: "https://flagcdn.com/kg.svg" },
  KHR: { code: "KH", flag: "https://flagcdn.com/kh.svg" },
  KMF: { code: "KM", flag: "https://flagcdn.com/km.svg" },
  KPW: { code: "KP", flag: "https://flagcdn.com/kp.svg" },
  KRW: { code: "KR", flag: "https://flagcdn.com/kr.svg" },
  KWD: { code: "KW", flag: "https://flagcdn.com/kw.svg" },
  KYD: { code: "KY", flag: "https://flagcdn.com/ky.svg" },
  KZT: { code: "KZ", flag: "https://flagcdn.com/kz.svg" },
  LAK: { code: "LA", flag: "https://flagcdn.com/la.svg" },
  LBP: { code: "LB", flag: "https://flagcdn.com/lb.svg" },
  LKR: { code: "LK", flag: "https://flagcdn.com/lk.svg" },
  LRD: { code: "LR", flag: "https://flagcdn.com/lr.svg" },
  LSL: { code: "LS", flag: "https://flagcdn.com/ls.svg" },
  LTL: { code: "LT", flag: "https://flagcdn.com/lt.svg" },
  LVL: { code: "LV", flag: "https://flagcdn.com/lv.svg" },
  LYD: { code: "LY", flag: "https://flagcdn.com/ly.svg" },
  MAD: { code: "MA", flag: "https://flagcdn.com/ma.svg" },
  MDL: { code: "MD", flag: "https://flagcdn.com/md.svg" },
  MGA: { code: "MG", flag: "https://flagcdn.com/mg.svg" },
  MKD: { code: "MK", flag: "https://flagcdn.com/mk.svg" },
  MMK: { code: "MM", flag: "https://flagcdn.com/mm.svg" },
  MNT: { code: "MN", flag: "https://flagcdn.com/mn.svg" },
  MOP: { code: "MO", flag: "https://flagcdn.com/mo.svg" },
  MRU: { code: "MR", flag: "https://flagcdn.com/mr.svg" },
  MUR: { code: "MU", flag: "https://flagcdn.com/mu.svg" },
  MVR: { code: "MV", flag: "https://flagcdn.com/mv.svg" },
  MWK: { code: "MW", flag: "https://flagcdn.com/mw.svg" },
  MXN: { code: "MX", flag: "https://flagcdn.com/mx.svg" },
  MYR: { code: "MY", flag: "https://flagcdn.com/my.svg" },
  MZN: { code: "MZ", flag: "https://flagcdn.com/mz.svg" },
  NAD: { code: "NA", flag: "https://flagcdn.com/na.svg" },
  NGN: { code: "NG", flag: "https://flagcdn.com/ng.svg" },
  NIO: { code: "NI", flag: "https://flagcdn.com/ni.svg" },
  NOK: { code: "NO", flag: "https://flagcdn.com/no.svg" },
  NPR: { code: "NP", flag: "https://flagcdn.com/np.svg" },
  NZD: { code: "NZ", flag: "https://flagcdn.com/nz.svg" },
  OMR: { code: "OM", flag: "https://flagcdn.com/om.svg" },
  PAB: { code: "PA", flag: "https://flagcdn.com/pa.svg" },
  PEN: { code: "PE", flag: "https://flagcdn.com/pe.svg" },
  PGK: { code: "PG", flag: "https://flagcdn.com/pg.svg" },
  PHP: { code: "PH", flag: "https://flagcdn.com/ph.svg" },
  PKR: { code: "PK", flag: "https://flagcdn.com/pk.svg" },
  PLN: { code: "PL", flag: "https://flagcdn.com/pl.svg" },
  PYG: { code: "PY", flag: "https://flagcdn.com/py.svg" },
  QAR: { code: "QA", flag: "https://flagcdn.com/qa.svg" },
  RON: { code: "RO", flag: "https://flagcdn.com/ro.svg" },
  RSD: { code: "RS", flag: "https://flagcdn.com/rs.svg" },
  RUB: { code: "RU", flag: "https://flagcdn.com/ru.svg" },
  RWF: { code: "RW", flag: "https://flagcdn.com/rw.svg" },
  SAR: { code: "SA", flag: "https://flagcdn.com/sa.svg" },
  SBD: { code: "SB", flag: "https://flagcdn.com/sb.svg" },
  SCR: { code: "SC", flag: "https://flagcdn.com/sc.svg" },
  SDG: { code: "SD", flag: "https://flagcdn.com/sd.svg" },
  SEK: { code: "SE", flag: "https://flagcdn.com/se.svg" },
  SGD: { code: "SG", flag: "https://flagcdn.com/sg.svg" },
  SHP: { code: "SH", flag: "https://flagcdn.com/sh.svg" },
  SLL: { code: "SL", flag: "https://flagcdn.com/sl.svg" },
  SOS: { code: "SO", flag: "https://flagcdn.com/so.svg" },
  SRD: { code: "SR", flag: "https://flagcdn.com/sr.svg" },
  SSP: { code: "SS", flag: "https://flagcdn.com/ss.svg" },
  STN: { code: "ST", flag: "https://flagcdn.com/st.svg" },
  SVC: { code: "SV", flag: "https://flagcdn.com/sv.svg" },
  SZL: { code: "SZ", flag: "https://flagcdn.com/sz.svg" },
  THB: { code: "TH", flag: "https://flagcdn.com/th.svg" },
  TJS: { code: "TJ", flag: "https://flagcdn.com/tj.svg" },
  TMT: { code: "TM", flag: "https://flagcdn.com/tm.svg" },
  TND: { code: "TN", flag: "https://flagcdn.com/tn.svg" },
  TOP: { code: "TO", flag: "https://flagcdn.com/to.svg" },
  TRY: { code: "TR", flag: "https://flagcdn.com/tr.svg" },
  TTD: { code: "TT", flag: "https://flagcdn.com/tt.svg" },
  TWD: { code: "TW", flag: "https://flagcdn.com/tw.svg" },
  TZS: { code: "TZ", flag: "https://flagcdn.com/tz.svg" },
  UAH: { code: "UA", flag: "https://flagcdn.com/ua.svg" },
  UGX: { code: "UG", flag: "https://flagcdn.com/ug.svg" },
  USD: { code: "US", flag: "https://flagcdn.com/us.svg" },
  UYU: { code: "UY", flag: "https://flagcdn.com/uy.svg" },
  UZS: { code: "UZ", flag: "https://flagcdn.com/uz.svg" },
  VES: { code: "VE", flag: "https://flagcdn.com/ve.svg" },
  VND: { code: "VN", flag: "https://flagcdn.com/vn.svg" },
  VUV: { code: "VU", flag: "https://flagcdn.com/vu.svg" },
  WST: { code: "WS", flag: "https://flagcdn.com/ws.svg" },
  XAF: { code: "XF", flag: "https://flagcdn.com/xf.svg" },
  XOF: { code: "XF", flag: "https://flagcdn.com/xof.svg" },
  ZAR: { code: "ZA", flag: "https://flagcdn.com/za.svg" },
  ZMW: { code: "ZM", flag: "https://flagcdn.com/zm.svg" },
  ZWL: { code: "ZW", flag: "https://flagcdn.com/zw.svg" },
};

const fromCurr = document.getElementById("fromCurr");
const toCurr = document.getElementById("toCurr");
const amountInput = document.getElementById("amount");
const resultDisplay = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");
const flagDisplay = document.getElementById("flagDisplay");

const BASE_URL = "https://api.exchangerate-api.com/v4/latest"; // Example API

function populateCurrencyDropdowns() {
  for (const currCode in countryList) {
      const optionFrom = document.createElement("option");
      optionFrom.value = currCode;
      optionFrom.innerText = currCode; // Show currency code
      fromCurr.appendChild(optionFrom);

      const optionTo = document.createElement("option");
      optionTo.value = currCode;
      optionTo.innerText = currCode; // Show currency code
      toCurr.appendChild(optionTo);
  }

  fromCurr.value = "USD"; // Default selection
  toCurr.value = "BDT"; // Default selection
}

async function convertCurrency() {
  const fromCurrency = fromCurr.value;
  const toCurrency = toCurr.value;
  let amount = amountInput.value;

  if (amount === "" || amount <= 0) {
      amount = 1;
      amountInput.value = amount;
  }

  const response = await fetch(`${BASE_URL}/${fromCurrency}`);
  const data = await response.json();
  const exchangeRate = data.rates[toCurrency];

  const convertedAmount = (amount * exchangeRate).toFixed(2);
  resultDisplay.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  
  // Display the flag for the selected currency
  flagDisplay.innerHTML = `<img src="${countryList[toCurrency].flag}" alt="Flag of ${countryList[toCurrency].code}">`;
}

// Initialize dropdowns and add event listeners
document.addEventListener("DOMContentLoaded", () => {
  populateCurrencyDropdowns();
  convertBtn.addEventListener("click", convertCurrency);
});
