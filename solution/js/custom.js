var app = new Vue({
    el: '#app',
    data: {
        mail: '',
        pass: '',
        confirm: '',
        phone:'',
        checkbox: false,
        isReady: false,
        mailCheck: false,
        passCheck: false,
        confirmCheck: false,
        mobileCheck:false,
        typePass: false,
        typeConfirm: false,
        showHidePass: 'show',
        showHideConfirm: 'show'

    },

    methods: {
        onSubmit() {

            if (this.isReady) {
                document.write('success')
            }
        },
        hidePass() {
            if (this.typePass) {
                this.typePass = false;
                this.showHidePass = 'show'
            } else {
                this.typePass = true
                this.showHidePass = 'hide'
            }
        },
        hideConfirm() {
            if (this.typeConfirm) {
                this.typeConfirm = false;
                this.showHideConfirm = 'show'
            } else {
                this.typeConfirm = true
                this.showHideConfirm = 'hide'
            }
        },
        checkMail() {
            if (this.mail.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/) || this.mail === '') {

                return false
            } else {

                return true
            }
        },
        changeMail() {
            if (this.mail.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
                this.mailCheck = true

            } else {
                this.mailCheck = false

            }
        },
        checkPhone() {
            if (this.phone.match(/^[0-9]*$/) || this.phone === '') {

                return false
            } else {

                return true
            }
        },
        changePhone() {
            if (this.phone.match(/^[0-9]*$/)) {
                this.mobileCheck = true

            } else {
                this.mobileCheck= false

            }
        },
        checkPass() {
            if (this.pass.match(/^(?=.*[0-9])(?=.*[a-z])([a-z0-9]+)$/) || this.pass === '') {

                return false
            } else {

                return true
            }
        },
        changePass() {
            if (this.pass.match(/^(?=.*[0-9])(?=.*[a-z])([a-z0-9]+)$/)) {
                this.passCheck = this.pass;

            } else {
                this.passCheck = false

            }
        },
        checkConfirm() {
            if (this.confirm === this.pass || this.pass === '') {

                return false
            } else {

                return true
            }
        },
        changeConfirm() {
            if (this.confirm === this.pass) {
                this.confirmCheck = true

            } else {
                this.confirmCheck = false

            }
        }
    },
    computed: {
        CheckReady() {
            if (this.mailCheck && this.passCheck && this.confirmCheck && this.checkbox && this.mobileCheck) {
                this.isReady = true;
                return true
            } else {
                this.isReady = false;
                return false
            }
        }
    }
})