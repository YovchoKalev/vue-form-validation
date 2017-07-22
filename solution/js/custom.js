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
            return this.mail.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/) || this.mail === ''
        },
        changeMail() {
            this.mail.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/) ? this.mailCheck = true : this.mailCheck = false
        },
        checkPhone() {
            return this.phone.match(/^[0-9]*$/) || this.phone === ''
        },
        changePhone() {
            this.phone.match(/^\d+$/) ? this.mobileCheck = true : this.mobileCheck = false
        },
        checkPass() {
            return (this.pass.match(/[0-9]/) && this.pass.match(/[a-z]/)) || this.pass === ''
        },
        changePass() {
            (this.pass.match(/[0-9]/) && this.pass.match(/[a-z]/)) ? this.passCheck = this.pass : this.passCheck = false
        },
        checkConfirm() {
            return this.confirm === this.pass || this.pass === ''
        },
        changeConfirm() {
            this.confirm === this.pass ? this.confirmCheck = true : this.confirmCheck = false
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