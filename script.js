function DocReset() {
  document.getElementById("FullName").value = "";
  document.getElementById("Gender").value = "none";
  document.getElementById("chk-1").checked = false;
  document.getElementById("chk-2").checked = false;
  document.getElementById("chk-3").checked = false;
  document.getElementById("chk-4").checked = false;

  let validfeedbacks = document.getElementsByClassName("valid-feedback");
  let invalidfeedbacks = document.getElementsByClassName("invalid-feedback");

  for (let i = 0; i < validfeedbacks.length; i++) {
    validfeedbacks[i].style.display = "none";
  }
  for (let i = 0; i < invalidfeedbacks.length; i++) {
    invalidfeedbacks[i].style.display = "none";
  }
}

let clicked_submit = false;

function validate(isSubmit = false) {
  let fn = document.getElementById("FullName").value;
  let gn = document.getElementById("Gender").value;
  let hb_sw = document.getElementById("chk-1").checked;
  let hb_r = document.getElementById("chk-2").checked;
  let hb_d = document.getElementById("chk-3").checked;
  let hb_sn = document.getElementById("chk-4").checked;

  if (isSubmit) {
    clicked_submit = true;
  }
  let error = false;
  let space_validation = fn.indexOf(" ");

  if (
    fn.length >= 5 &&
    space_validation > -1 &&
    space_validation < fn.length - 2
  ) {
    document.getElementById("Full-name-valid").style.display = "block";
    document.getElementById("Full-name-invalid").style.display = "none";
  } else {
    document.getElementById("Full-name-valid").style.display = "none";
    document.getElementById("Full-name-invalid").style.display = "block";
    error = true;
  }

  if (gn !== "none") {
    document.getElementById("Gender-valid").style.display = "block";
    document.getElementById("Gender-invalid").style.display = "none";
  } else {
    document.getElementById("Gender-valid").style.display = "none";
    document.getElementById("Gender-invalid").style.display = "block";
    error = true;
  }
  let check_hobby = 0;

  if (!hb_sw) {
    document.getElementById("chk-invalid").style.display = "block";
    document.getElementById("chk-valid").style.display = "none";
  } else {
    document.getElementById("chk-valid").style.display = "block";
    document.getElementById("chk-invalid").style.display = "none";
    check_hobby++;
  }
  if (!hb_r) {
    document.getElementById("chk-invalid").style.display = "block";
    document.getElementById("chk-valid").style.display = "none";
  } else {
    document.getElementById("chk-valid").style.display = "block";
    document.getElementById("chk-invalid").style.display = "none";
    check_hobby++;
  }
  if (!hb_d) {
    document.getElementById("chk-invalid").style.display = "block";
    document.getElementById("chk-valid").style.display = "none";
  } else {
    document.getElementById("chk-valid").style.display = "block";
    document.getElementById("chk-invalid").style.display = "none";
    check_hobby++;
  }
  if (!hb_sn) {
    document.getElementById("chk-invalid").style.display = "block";
    document.getElementById("chk-valid").style.display = "none";
  } else {
    document.getElementById("chk-valid").style.display = "block";
    document.getElementById("chk-invalid").style.display = "none";
    check_hobby++;
  }

  if (check_hobby > 0) {
    document.getElementById("chk-valid").style.display = "block";
    document.getElementById("chk-invalid").style.display = "none";
  }

  if (!error && clicked_submit && check_hobby > 0) {
    alert(
      `Hobbies of ${fn} (${gn}) ${check_hobby == 1 ? "is" : "are"}${
        hb_sw ? " Swimming" : ""
      }${hb_r ? " and" : ""}${hb_r ? " reading Novels" : ""}${
        hb_d ? " and" : ""
      }${hb_d ? " Dancing" : ""}${hb_sn ? " and" : ""}${
        hb_sn ? " Singing" : ""
      }`
    );
    DocReset();
  }
  clicked_submit = false;
  check_hobby = 0;
}
