/* Bài 1 */
function baitap1 () {
let myname = document.getElementById("myname").value;
  let total = +document.getElementById("total").value;
  let dperson = +document.getElementById("dperson").value;
  /* Bước 2 Xử lý */
  let tax = total - 4000000 - (dperson * 1600000);
  /* Kiểm tra thông tin khách hàng nhập */
  if (!total || tax <= 0) {

    alert("Số tiền thu nhập không hợp lệ");
    document.getElementById("taxshow").innerHTML =
      "Họ Tên: " +
      myname +
      " ; " +
      "Tiền thuế thu nhập cá nhân: " +
      " 0 " +
      "vnd";
      return
  }
  
  
  

  let currentFormat = new Intl.NumberFormat("vn-VN");

  
  totalmoney = calcPrice(tax, 5, 10, 15, 20, 25, 30, 35);

  /* Đầu ra */
  document.getElementById("taxshow").innerHTML =
    "Họ Tên: " +
    myname +
    " ; " +
    "Tiền thuế thu nhập cá nhân: " +
    currentFormat.format(totalmoney) +
    "vnd";
}

function calcPrice(tax, taxs1, taxs2, taxs3, taxs4, taxs5, taxs6, taxs7) {
  let totalmoney = 0;
  if (tax <= 60000000) {
    totalmoney = tax * (taxs1 / 100);
  } else if (tax <= 120000000) {
    totalmoney = tax * (taxs2 / 100);
  } else if (tax <= 210000000) {
    totalmoney = tax * (taxs3 / 100);
  } else if (tax <= 384000000) {
    totalmoney = tax * (taxs4 / 100);
  } else if (tax <= 624000000) {
    totalmoney = tax * (taxs5 / 100);
  } else if (tax <= 960000000) {
    totalmoney = tax * (taxs6 / 100);
  } else {
    totalmoney = tax * (taxs7 / 100);
  }
  return totalmoney;
}

/** Bài số 1
 * Mô hình 3 khối: Tính thuế thu nhập cá nhân
 * Đầu vào:
 * - Tạo biến myname, total, dperson cho người dùng nhập vào
 * Xử lý:
 * - DOM giá trị người dùng nhập về, kiểm tra tổng thu nhập của năm 
 * - Viết hàm fuction tính thuế totalmoney
 * - Ta gọi biến hàm 
 * Đầu ra:
 * - Thông báo họ tên, và số tiền thuế thu nhập
 */

/* Bài 2 */

function chonKhachHang (){
    let client = document.getElementById("client").value;
    if (client == 3) {
        document.getElementById("connect").style.display = "block";
    } else {
        document.getElementById("connect").style.display = "none";
    }
};


function baitap2 () {
    /* Bước 1: Đầu vào */
    let client = document.getElementById("client").value;
    let msclient = document.getElementById("msclient").value;
    let channel = +document.getElementById("channel").value;
    let connect = +document.getElementById("connect").value;

    /* Bước 2: Xử Lý */
    if (client == 1 || !msclient ) {
        alert("Hãy chọn loại khách hàng và Nhập Thông Tin Mã Khách Hàng");
        document.getElementById("channel1").innerHTML = "Mã Khách Hàng: " + msclient + " ; " + "Tiền Cáp: " + "$0.00" 
        return;
    }
    
    if (client == 2) {
        price = calcchannel (client, channel, connect, 4.5, 20.5, 7.5) 
    }else if (client == 3) {
        price = calcchannel (client, channel, connect, 15, 75, 50) 
    };

    document.getElementById("channel1").innerHTML =  "Mã Khách Hàng: " + msclient + " ; " + "Tiền Cáp: " + "$" + price;
};

// Tạo hàm tính cáp
function calcchannel (client, channel, connect, bill, basicfee, premiumfee) {
  let price = 0;
    if (client == 2) {
        price = bill + basicfee + (premiumfee * channel);
    } else if (client == 3 && channel > 10) {
        price = bill + basicfee + (premiumfee * channel) + (connect - 10) * 5; 
    } else if (client == 3 && channel <= 10) {
        price = bill + basicfee + (premiumfee * channel) ;
    }
    return price
};

/* Bài số 2
- Mô hình 3 khối: Tính tiền cáp
- Đầu vào":
- Tạo biến client; msclient; channel; connect cho người dùng nhập vào 
- Xử Lý:
- Kiểm tra thông tin chọn loại khách hàng giữa nhà dân và doanh nghiệp
- Tạo biến hàm tính cáp
- Gọi hàm và nhập số dữ liệu đề bài cho
- Đầu ra: Thông báo Mã khách hàng và tiền cáp
-  */
