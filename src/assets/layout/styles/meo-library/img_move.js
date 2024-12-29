import * as def from "./constant.js"
const IMG_POS_X_MAX = def.IMG_POS_X_MAX;
const IMG_POS_X_MIN = def.IMG_POS_X_MIN;
const SPEED_IMG = def.SPEED_4
// Author: Lê hoàng trung 
// date: 12/11/2022 dd-mm-yy
// function: kéo ảnh từ bên trái sang bên phải
// input: tên ele cần kéo
export function drag_img_left_to_right(ele_name) {

    var ele_img_meomeos = document.getElementsByClassName(ele_name);
    console.log(ele_img_meomeos);
    for (let i = 0; i < ele_img_meomeos.length; i++) {
        ele_img_meomeos[i].style.left = 350 * i + "px";
    }
    for (let i = 0; i < ele_img_meomeos.length; i++) {
        setTimeout(changeImg(ele_img_meomeos[i], 350 * i + IMG_POS_X_MIN, ele_img_meomeos.length - 1 - i), 100);


    }
}
function changeImg(ele_img_meomeo, img_pos_x, img_pos_x_max) {
    return function () {
        if (img_pos_x < IMG_POS_X_MAX) {
            img_pos_x += SPEED_IMG;
            ele_img_meomeo.style.left = img_pos_x + "px";
        }
        else if (img_pos_x >= IMG_POS_X_MAX - 200) {
            img_pos_x = IMG_POS_X_MIN - 350;
            ele_img_meomeo.style.left = img_pos_x + "px";
        }
        setTimeout(changeImg(ele_img_meomeo, img_pos_x, img_pos_x_max), 100);
    }
}