/// <reference types="Cypress" />
const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const XLSX = require("xlsx");

const testData = require("../fixtures/xlsxData.json");
const VoucherSuccess = require("../fixtures/VoucherSuccess.json");

context("Read excel", () => {
  it("Read test case with excel", () => {
    cy.parseXlsx("cypress/fixtures/excelData.xlsx").then((jsonData) => {
      let dataOK = jsonData[0].data;

      if (testData.length != dataOK.length) {
        cy.writeFile("cypress/fixtures/VoucherSuccess.json", dataOK);
      }
    });
  });
});

//Test Đăng Kí
describe("Test giao diện đăng kí", () => {
  before(() => {
    cy.visit("https://voucher.votuan.xyz/partner/auth");
  });

  it("Kiểm tra chọn App ID Vy 03", () => {
    cy.get("select").select("VY03");
    cy.get("select").should("have.value", "VY03");
  });

  it("Test click vào button đăng nhập", () => {
    cy.get(".btn").click();
    cy.wait(500);
  });

  it("Test click vào button đăng ki", () => {
    cy.get(".MuiTypography-root").find("a").click();

    cy.get("h4").should("contain.text", "Đăng kí tài khoản người dùng");
  });
});

//Test UI

describe("Test giao diện và nội dung trên web", () => {
  before(() => {
    cy.visit("https://voucher.votuan.xyz/partner/auth");
  });

  it("Kiểm tra chọn App ID Vy 03", () => {
    cy.get("select").select("VY03");
    cy.get("select").should("have.value", "VY03");
  });

  it("Test click vào button đăng nhập", () => {
    cy.get(".btn").click();
    cy.wait(500);
  });

  it("Test chỉ nhập tài khoản không nhập mật khẩu", () => {
    cy.get("#username").type("LeVanHieu123456@gmail.com");
    cy.get("button").click();

    cy.get("#notistack-snackbar").should("exist");
  });

  it("Test chỉ nhập mật khẩu không nhập tài khoản", () => {
    cy.get("#username").clear();
    cy.get("#password").type("123123122");
    cy.get("button").click();

    cy.get("#notistack-snackbar").should("exist");
  });

  it("Test ", () => {
    cy.get("#username").type("LeVanHieu123456@gmail.com");
    cy.get("#password").type("123123122");
    cy.get("button").click();

    cy.get("#notistack-snackbar").should("exist");
  });

  it("Test đăng nhập nhập đúng tài khoản", () => {
    cy.get("#username").clear();
    cy.get("#password").clear();

    cy.get("#username").type("LeVanHieu123456@gmail.com");
    cy.get("#password").type("123123123");
    cy.get("button").click();
    cy.wait(2000);
  });

  testData.forEach((testCase, index) => {
    switch (testCase[1]) {
      case "check":
        it(`${testCase[2]}`, function () {
          cy.get(".menu-nav")
            .children("li")
            .eq(index - 1)
            .find("span")
            .should("contain.text", testCase[5]);
        });
        break;
      case "input":
        it(`${testCase[2]}`, function () {
          cy.get(".card-body")
            .find(".form-group")
            .children("input[type=text]")
            .eq(index - 6)
            .type(testCase[5])
            .should("contain.value", testCase[6]);
        });
        break;
      case "input_number":
        it(`${testCase[2]}`, function () {
          cy.get("input[type=number]")
            .eq(index - 9)
            .type(testCase[5])
            .should("contain.value", testCase[6]);
        });
        break;
      case "textarea":
        it(`${testCase[2]}`, function () {
          cy.get(".card-body")
            .find(".form-group")
            .children("textarea")
            .first()
            .type(testCase[5])
            .should("contain.value", testCase[6]);
        });
        break;
      case "input_date":
        it(`${testCase[2]}`, function () {
          cy.get("input[type=date]")
            .eq(index - 13)
            .type("2022-12-12");
        });
        break;
      default:
        "";
    }
  });
});

//Kiểm tra lấy danh sách Tour

describe("Test chức năng của trang web", () => {
  beforeEach(() => {
    cy.login("LeVanHieu123456@gmail.com", "123123123");
  });

  it("Test tạo voucher thất bại", () => {
    testData.forEach((testCase, index) => {
      switch (testCase[1]) {
        case "check":
          cy.get(".menu-nav")
            .children("li")
            .eq(index - 1)
            .find("span")
            .should("contain.text", testCase[5]);

          break;
        case "input":
          cy.get(".card-body")
            .find(".form-group")
            .children("input[type=text]")
            .eq(index - 6)
            .type(testCase[5])
            .should("contain.value", testCase[6]);

          break;
        case "input_number":
          cy.get("input[type=number]")
            .eq(index - 9)
            .type(testCase[5])
            .should("contain.value", testCase[6]);

          break;
        case "textarea":
          cy.get(".card-body")
            .find(".form-group")
            .children("textarea")
            .first()
            .type(testCase[5])
            .should("contain.value", testCase[6]);

          break;
        case "input_date":
          cy.get("input[type=date]")
            .eq(index - 13)
            .type("2022-12-17");

          break;
        default:
          "";
      }
    });
    cy.get(".card-footer").children("input[type=submit]").click();
    cy.wait(500);

    cy.get(".Toastify__toast-body")
      .children("div")
      .last()
      .should("contain.text", "Something went very wrong !");
  });

  it("Test tạo voucher thành công", () => {
    VoucherSuccess.forEach((testCase, index) => {
      switch (testCase[1]) {
        case "check":
          cy.get(".menu-nav")
            .children("li")
            .eq(index - 1)
            .find("span")
            .should("contain.text", testCase[5]);

          break;
        case "input":
          cy.get(".card-body")
            .find(".form-group")
            .children("input[type=text]")
            .eq(index - 6)
            .type(testCase[5])
            .should("contain.value", testCase[6]);

          break;
        case "input_number":
          cy.get("input[type=number]")
            .eq(index - 9)
            .type(testCase[5])
            .should("contain.value", testCase[6]);

          break;
        case "textarea":
          cy.get(".card-body")
            .find(".form-group")
            .children("textarea")
            .first()
            .type(testCase[5])
            .should("contain.value", testCase[6]);

          break;
        case "input_date":
          cy.get("input[type=date]")
            .eq(index - 13)
            .type(testCase[6]);

          break;
        default:
          "";
      }
    });
    cy.get(".card-footer").children("input[type=submit]").click();
    cy.wait(500);

    cy.get(".Toastify__toast-body")
      .children("div")
      .last()
      .should("contain.text", "Bạn không đủ quyền để truy cập !");
  });

  it("Test Xem danh sách voucher của Nhà hàng", () => {
    cy.get(".menu-nav")
      .children("li")
      .eq(1)
      .find("span")
      .should("contain.text", "Danh sách voucher")
      .click();

    cy.get(".card-toolbar").click();

    cy.get(".navi")
      .children("li")
      .eq(0)
      .find("span")
      .should("contain.text", "Nhà hàng")
      .click();

    cy.get(".Toastify__toast-body")
      .children("div")
      .last()
      .should("contain.text", "Lấy danh sách voucher thành công !");
  });

  it("Test Xem danh sách voucher của Chuyến bay", () => {
    cy.get(".menu-nav")
      .children("li")
      .eq(1)
      .find("span")
      .should("contain.text", "Danh sách voucher")
      .click();

    cy.get(".card-toolbar").click();

    cy.get(".navi")
      .children("li")
      .eq(1)
      .find("span")
      .should("contain.text", "Chuyến bay")
      .click();

    cy.get(".Toastify__toast-body")
      .children("div")
      .last()
      .should("contain.text", "Lấy danh sách voucher thành công !");
  });

  it("Test Xem dashboard", () => {
    cy.get(".menu-nav")
      .children("li")
      .eq(0)
      .find("span")
      .should("contain.text", "Dashboard")
      .click();
  });

  it("Test chức năng logout", () => {
    cy.get(".topbar-item").children(".btn").click();
    cy.get(".navi").children(".btn").click();

    cy.get(".Toastify__toast-body")
      .children("div")
      .last()
      .should("contain.text", "Đăng xuất thành công !");
  });

  it("Test chức năng xem chi tiết voucher", () => {
    cy.get(".menu-nav")
      .children("li")
      .eq(1)
      .find("span")
      .should("contain.text", "Danh sách voucher")
      .click();

    cy.get(".card-toolbar").click();

    cy.get(".navi")
      .children("li")
      .eq(0)
      .find("span")
      .should("contain.text", "Nhà hàng")
      .click();

    cy.get(".Toastify__toast-body")
      .children("div")
      .last()
      .should("contain.text", "Lấy danh sách voucher thành công !");

    cy.get(".card-body")
      .children("a")
      .first()
      .should("contain.text", "Chi tiết")
      .click();
  });

  it("Test xem danh sách sử dụng voucher", () => {
    cy.get(".menu-nav")
      .children("li")
      .eq(1)
      .find("span")
      .should("contain.text", "Danh sách voucher")
      .click();

    cy.get(".card-toolbar").click();

    cy.get(".navi")
      .children("li")
      .eq(0)
      .find("span")
      .should("contain.text", "Nhà hàng")
      .click();

    cy.get(".Toastify__toast-body")
      .children("div")
      .last()
      .should("contain.text", "Lấy danh sách voucher thành công !");

    cy.get(".card-body")
      .children("a")
      .first()
      .should("contain.text", "Chi tiết")
      .click();

    cy.get(".form-control").select(0);
  });

  it("Test xem danh sách mua voucher", () => {
    cy.get(".menu-nav")
      .children("li")
      .eq(1)
      .find("span")
      .should("contain.text", "Danh sách voucher")
      .click();

    cy.get(".card-toolbar").click();

    cy.get(".navi")
      .children("li")
      .eq(0)
      .find("span")
      .should("contain.text", "Nhà hàng")
      .click();

    cy.get(".Toastify__toast-body")
      .children("div")
      .last()
      .should("contain.text", "Lấy danh sách voucher thành công !");

    cy.get(".card-body")
      .children("a")
      .first()
      .should("contain.text", "Chi tiết")
      .click();

    cy.get(".form-control").select(0);
  });

  //Thẻ quà tặng
  it("Test Xem danh sách thẻ quà tặng của nhà hàng", () => {
    cy.get(".menu-nav")
      .children("li")
      .eq(3)
      .find("span")
      .should("contain.text", "Danh sách thẻ quà tặng")
      .click();

    cy.get(".card-toolbar").click();

    cy.get(".navi")
      .children("li")
      .eq(0)
      .find("span")
      .should("contain.text", "Nhà hàng")
      .click();

    cy.get(".Toastify__toast-body")
      .children("div")
      .last()
      .should("contain.text", "Lấy danh sách phiếu điểm thưởng thành công !");
  });

  it("Test Xem danh sách thẻ quà tặng của Chuyến bay", () => {
    cy.get(".menu-nav")
      .children("li")
      .eq(3)
      .find("span")
      .should("contain.text", "Danh sách thẻ quà tặng")
      .click();

    cy.get(".card-toolbar").click();

    cy.get(".navi")
      .children("li")
      .eq(1)
      .find("span")
      .should("contain.text", "Chuyến bay")
      .click();

    cy.get(".Toastify__toast-body")
      .children("div")
      .last()
      .should("contain.text", "Lấy danh sách phiếu điểm thưởng thành công !");
  });

  it("Test chức năng xem danh sachs chi tiết thẻ quà tặng", () => {
    cy.get(".menu-nav")
      .children("li")
      .eq(3)
      .find("span")
      .should("contain.text", "Danh sách thẻ quà tặng")
      .click();

    cy.get(".card-toolbar").click();

    cy.get(".navi")
      .children("li")
      .eq(0)
      .find("span")
      .should("contain.text", "Nhà hàng")
      .click();

    cy.get(".card-body").find(".btn").first().click();
  });

  it("Test chức năng xem danh sách đã đổi thẻ quà tặng", () => {
    cy.get(".menu-nav")
      .children("li")
      .eq(3)
      .find("span")
      .should("contain.text", "Danh sách thẻ quà tặng")
      .click();

    cy.get(".card-toolbar").click();

    cy.get(".navi")
      .children("li")
      .eq(0)
      .find("span")
      .should("contain.text", "Nhà hàng")
      .click();

    cy.get(".card-body").find(".btn").first().click();

    cy.get(".form-control").select(1);
  });
});
