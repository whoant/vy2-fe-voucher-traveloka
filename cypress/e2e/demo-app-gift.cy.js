/// <reference types="Cypress" />
const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const XLSX = require("xlsx");

const testData = require("../fixtures/xlsxData.json");

context("Read excel", () => {
  it("Read test case with excel", () => {
    cy.parseXlsx("cypress/fixtures/excelData.xlsx").then((jsonData) => {
      let dataOK = jsonData[0].data;

      if (testData.length != dataOK.length) {
        cy.writeFile("cypress/fixtures/xlsxData.json", dataOK);
      }
    });
  });
});

describe("test case", () => {
  before(() => {
    cy.visit("http://94.100.26.30:30003/partner/auth");
  });

  it("Kiểm tra chọn App ID Vy 03", () => {
    cy.get("select").select("VY03");
    cy.get("select").should("have.value", "VY03");
  });

  it("Test click vào button đăng nhập", () => {
    cy.get(".btn").click();
    cy.wait(500);
  });

  it("Test đăng nhập nhập sai tài khoản", () => {
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
    console.log(testCase);

    // read first sheet (identified by first of SheetNames)

    // convert to JSON
  });

  it("Test click vào button tạo voucher", () => {
    cy.get(".card-footer").children("input[type=submit]").click();
    cy.wait(500);

    cy.get(".Toastify__toast-body")
      .children("div")
      .last()
      .should("contain.text", "Bạn không đủ quyền để truy cập !");
  });
});
