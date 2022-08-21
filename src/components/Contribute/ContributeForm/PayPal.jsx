import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import swal from "sweetalert2";
import "./PayPalStyles.css";
import { useEffect } from "react";
import { useState } from "react";

export default function PayPalCheckout({ formData }) {
  /* const formData = {
    fullname: "example",
    email: "example@mail.com",
    address: "guada 1042",
    addresscontinue: "sydney",
    city: "Ohio",
    country: "US",
    postalcode: "3000",
    valor: 10,
  }; */

  const orderItems = [
    {
      name: "contribucion",
      unit_amount: { value: formData.valor + ".0", currency_code: "USD" },
      quantity: "1",
      description: "",
    },
  ];
  const orderItemsTotal = formData.valor;
  const purchaseAmount = {
    value: formData.valor + ".0",
    currency_code: "USD",
    breakdown: {
      item_total: {
        value: orderItemsTotal + ".0",
        currency_code: "USD",
      },
      shipping: {
        currency_code: "USD",
        value: "0.0",
      },
    },
  };
  const payment = (data, actions) => {
    console.dir(formData);
    const payment = {
      payer: {
        email_address: formData.email,
        // phone: {
        //   phone_number: {
        //       national_number: '4543433243',
        //   }
        // },
        // name: {
        //   given_name: "PayPal",
        //   surname: "Customer",
        // },
        address: {
          address_line_1: formData.address,
          address_line_2: formData.addresscontinue,
          admin_area_2: formData.city,
          admin_area_1: formData.country || "CA",
          postal_code: formData.postalcode,
          country_code: "US",
        },
      },
      purchase_units: [
        {
          amount: purchaseAmount,
          description: "Muchas Gracias por contribuir, Somos Más.",
          items: orderItems,
          shipping: {
            name: {
              full_name: formData.fullname,
            },
            address: {
              address_line_1: formData.address,
              address_line_2: formData.addresscontinue,
              admin_area_2: formData.city,
              admin_area_1: formData.country || "CA",
              postal_code: formData.postalcode,
              country_code: "US",
            },
          },
        },
      ],
    };
    return actions.order.create(payment);
  };

  const onApprove = (data, actions) => {
    return actions.order
      .capture()
      .then((res) => {
        let payments = res.purchase_units[0].payments.captures[0];
        let status = payments.final_capture;
        if (status) {
          /* let date = payments.create_time;
          let amount = {
            total: payments.amount.value,
            shipping: shippingAmount,
            orderItemsTotal: orderItemsTotal,
          }; */
          /* let address = Object.values(res.purchase_units[0].shipping.address).reduce(
            (a, s) => a + " " + s
          );
          let customerName = res.purchase_units[0].shipping.name.full_name;
          let products = cart.products.map((p) => {
            return {
              id: p.idProduct,
              name: p.name,
              img: p.img,
              price: p.price,
              amount: p.count,
            };
          }); */

          /* const orderData = {
            date,
            amount,
            address,
            email: formData.email,
            customerName,
            products,
            idUser: userData.id,
          }; */
          swal({
            title: `Payment processed correctly`,
            text: `ID: ${res.id}`,
            icon: "success",
            button: "Accept",
          });
          /* axios.all([
            corsAxiosPost("/sendmail", { ...orderData }),
            corsAxiosPost("/orders", { ...orderData }),
          ]); */
        }
      })
      .catch((error) => {
        console.log(error);
        alert("An error ocurred while processing the payment");
      });
  };

  const onError = (error) => {
    console.log(error);
    swal({
      title: `Payment has failed, please try again`,
      icon: "error",
    });
  };
  const onCancel = (data, actions) => {
    swal({
      title: `Payment was cancel by the user`,
      icon: "error",
    });
  };
  return (
    <div className="w-50" style={{ minHeight: "50vh" }}>
      <div className="module--paypal">
        <p>Continuar con:</p>
        <PayPalScriptProvider
          options={{
            "client-id":
              "AZiW78_gEbx0Wdp3puDrpDaYyKLMXMK5ADl7kMOrmVIqYi57n9vJE8Wn6TrARd3O8nRLqmn0qqr0p2lM",
          }}
        >
          <PayPalButtons
            style={{
              layout: "horizontal",
              color: "gold",
            }}
            createOrder={(data, actions) => payment(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            onCancel={(data, actions) => onCancel(data, actions)}
            onError={(error) => onError(error)}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}
