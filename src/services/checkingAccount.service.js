import axios from "axios";
import authHeader from "@/services/auth-header";

class CheckingAccountService {

    checkingAccountList() {

        return axios.get(process.env.VUE_APP_API_URL + `/car-service/checking-account-api/`, {headers: authHeader()})


    }

    getPaymentType() {
        return axios.get(process.env.VUE_APP_API_URL + `/car-service/payment-type-select-api/`, {headers: authHeader()})


    }

    addPayment(payment) {
        return axios.post(process.env.VUE_APP_API_URL + '/car-service/payment-account-api/',
            {
                checkingAccountUUID: payment.uuid,
                paymentAmount: payment.paymentAmount,
                paymentType: payment.paymentType


            }, {headers: authHeader()}).then(response => {
            console.log(response)


            return response;
        }).catch(error => {
            console.log("hata", error)
            return error
        });


    }


    getPaymentMovement(id) {
        const params = {
            uuid: id

        };
        return axios.get(process.env.VUE_APP_API_URL + '/car-service/payment-account-api/',


            {
                headers: authHeader(),
                params
            }).then(response => {
            console.log(response)


            return response;
        }).catch(error => {
            console.log("hata", error)
            return error
        });


    }


}

export default CheckingAccountService