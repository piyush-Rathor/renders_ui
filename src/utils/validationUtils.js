export default {
  isEmailValid: function (email) {
    let reg = /^\w+([.-/+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email)) {
      return true;
    } else {
      return false;
    }
  },
  isMobileValid: function (mobile) {
    let reg = /^(?:50|51|52|55|56|58|2|3|4|6|7|9)\d{7}$/;
    if (reg.test(mobile)) {
      return true;
    } else {
      return false;
    }
  },
  isMobileValidInd: (mobile) => {
    let reg = /^[6-9]\d{9}$/;
    if (reg.test(mobile)) {
      return true;
    } else {
      return false;
    }
  },
};
