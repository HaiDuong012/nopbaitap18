//1Tạo một mảng products để lưu trữ các đối tượng product bao gồm các thông
//tin: productId, productName, price, image, description, createdAt.
// Thực hiện các yêu cầu sau đây:
//a,Hiển thị danh sách sản phẩm
//b,Thêm mới sản phẩm vào trong mảng (Kiểm tra dữ liệu đầu vào, id của sản phẩm
//không được trùng. Nếu trùng thì báo cho người dùng biết là “Id không được phép
//trùng”, ngày thêm phải format đúng định dạng khi thêm mới)
//c,Tìm kiếm sản phẩm theo tên
//d,Sắp xếp sản phẩm tăng dần theo giá
//e,Lọc ra những sản phẩm có giá lớn hơn 100.000đ
//2,Tạo một mảng users, và xây dựng đối tượng user bao gồm các trường
// sau: userId, userName, gender, email, password, createdAt. Thực hiện các yêu cầu sau:
//a,Thêm mới user vào trong mảng (Kiểm tra định dạng email, mật khẩu phải lớn
// hơn 8 ký tự, format ngày tháng)
//b,Hiển thị danh sách user trong màn hình console.log()
//c,Thực hiện chức năng tìm kiếm user theo tên hoặc email
//d,Xây dựng tính năng đăng nhập. Thực hiện tìm kiếm thông tin user theo email
//và password. Nếu như thỏa mãn điều kiện thì hiển thị thông báo là “Đăng nhập thành công”.
//Nếu như sau email hoặc mật khẩu thì thông báo “Đăng nhập thất bại”

//
//
//Bài 1:
//các biến cần nhập.
// const productId = prompt("mời nhập mã sp");
// const productName = prompt("mời nhập tên sp");
// const price = +prompt("mời nhập giá sp");
// const image = "";
// const description = prompt("mô tả sp");
// const createdAt = new Date().toISOString().split("T")[0];

// //tạo mảng chờ push.
// const products = [];
// //định dạng biến có trong products.
// const product = {
//   productId: productId,
//   productName: productName,
//   image: image,
//   description: description,
//   createdAt: new Date().toISOString().split("T")[0],
// };

// //push biến vào mảng.
// products.push(product);

// //tạo hàm lặp qua các biên trong mảng products.
// const readProduct = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     return array[i];
//   }
// };

// // Tạo đối tượng product mới
// const productPush = () => {
//   let proId = prompt("mời nhập mã sp");
//   let proName = prompt("mời nhập tên sp");

//   let price = +prompt("mời nhập giá sp");
//   let image = "";
//   let description = prompt("mô tả sp");

//   const newProduct = {
//     proId: proId,
//     proName: proName,
//     price: price,
//     image: image,
//     description: description,
//   };
//   products.push(newProduct);
// };

// //tạo hàm tìm kiếm sp trong products. Lưu vị trí chờ test lại trong switch.
// const productSearch = (inputValue, array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].productrName === inputValue) {
//       return i;
//     } else {
//       return -1;
//     }
//   }
// };

// //tạo hàm sắp xếp giá sp và chec sp tren 100k để tiện cho việc tìm kiếm.
// let priceSort = price.sort((a, b) => {
//   return a.price - b.price;
// }); // sort theo đối tượng chứ không phải là number thông thường

// let priceMax = [];
// const productNamesort = () => {
//   for (let i = 0; i < priceSort.length; i++) {
//     if (priceSort[i] > 100000) {
//       priceMax.push(priceSort[i]);
//     }
//     for (let j = 0; j < productName.length; j++) {
//       priceSort[i] = productName[j];
//     }
//   }
//   return productName;
// };

// //sử dụng do switch nhâp case thực hiện yêu cầu của khách hàng.
// do {
//   choose = +prompt("moi ban nhap case");
//   switch (choose) {
//     //
//     case 1:
//       readProduct(products);
//       console.log(readProduct(products));
//       break;
//     //
//     case 2:
//       productPush();
//       break;
//     //
//     case 3:
//       const nameSearch = prompt("Nhap ten de tim kiem:");
//       const index = productSearch(nameSearch, products);

//       if (index === -1) {
//         console.log("ko tim thay");
//       } else {
//         console.log("vi tri cua ten can tim la:", index);
//       }

//       break;
//     //
//     case 4:
//       productNamesort();
//       break;

//     case 5:
//       priceMax();
//       break;

//     default:
//       break;
//   }
// } while (choose !== 6);

//

//bài 2
const users = [];
/**
 * validate địa chỉ email
 * @param {*} email email nhập từ phía người dùng
 * @returns trả về 1 chuỗi định dạng nếu email hợp lệ. ko trả về dữ liệu nếu email ko hợp lệ
 */
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
/**
 * kiem tra du lieu đầu vào
 * @param {*} email email lấy tu người dùng
 * @param {*} password mk lấy từ người dùng
 * @returns tra ve mảng rỗng nếu dư lieu thoa man, mảng lỗi nếu du liệu ko hợp lệ
 */
const validateData = (email, password) => {
  // gắn cờ để theo dõi trạng thái hợp lệ của dữ liệu
  let error = [];

  if (!validateEmail(email)) {
    error.push("email ko hợp lệ");
  }
  if (password.length < 8) {
    error.push("mk phai lơn hơn 8 kí tự");
  }
  if (error.length > 0) {
    return error;
  } else {
    return [];
  }
};
// console.log(validateData("hai@gmail.com", "121332555"));
/**
 * thêm mới dữ liệu
 * @returns
 */
const creatUser = () => {
  //lấy dữ liệu từ client;
  let userId = +prompt("nhập id của user:");
  let userName = prompt("nháp tên");
  let gender = prompt("nhap giới tính");
  let address = prompt("nhập địa chỉ");
  let email = prompt("nhập email");
  let password = prompt("nhập password");
  // đối tuong user
  const newUser = {
    userId: userId,
    userName: userName,
    gender: gender,
    address: address,
    email: email,
    password: password,
    createdAt: new Date().toISOString().split("T")[0],
  };
  //bắt validate của dữ liệu đầu vào
  let isValid = validateData(email, password);
  if (isValid.length > 0) {
    console.log(isValid);
  } else {
    //thêm đói tượng user vào mảng
    users.push(newUser);
  }
};
/**
 * hiển thị danh sách user
 * auht:  nds(32232/32/23)
 */
const handleLoadUser = () => {
  if (users.length === 0) {
    console.log(" chưa có tk nào !!!");
  } else {
    users.forEach((user) => console.log(user));
  }
};
/**
 * tìm user theo tên
 * @param {*} userName tên cần tìm lấy từ client
 * @returns trả về mảng rổng nếu ko tìm thấy. Trả về mảng user nếu tìm thấy
 * auth: sđs(21/12/21)
 */
const handleSearchUser = (userName) => {
  //tìm user trong mảng
  const findByUserName = users.filter((user) => user.userName === userName);
  //kiểm tra kqua trả về
  if (findByUserName.length === 0) {
    return "ko có kqua";
  } else {
    return findByUserName;
  }
};
const handleLoadLogin = (email, password) => {
  if (!email || !password) {
    return "email và mk";
  } else {
    //tìm kiếm user theo email
    const findByUserEmail = users.find((user) => user.email === email);
    if (!findByUserEmail) {
      return "email hoac mk ko đúng";
    } else {
      if (findByUserEmail.email === email && findByUserEmail === password) {
        //chuyển trang
        return "đăng nhập thành công";
      } else {
        return "email hoặc mk ko đúng";
      }
    }
  }
};
