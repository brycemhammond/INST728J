var temp = 0
var val = 0;

function add_task() {
    var category = document.querySelector('#select_category').value,
        description = document.querySelector('.task_description').value,
        name = document.querySelector('.task_name').value,
        target = document.getElementById('completion_target').value;


    switch (category) {
        case "Academic":
            val = 0;
            break;
        case "Professional":
            val = 1;
            break;
        case "Work":
            val = 2;
            break;
        case "Leisure":
            val = 3;
            break;
        case "Household":
            val = 4;
            break;
        case "Miscellaneous":
            val = 5;
            break;
    }

    var class_li = ['list_academic list_dsp_none', 'list_professional list_dsp_none',
        'list_work list_dsp_none', 'list_leisure list_dsp_none', 'list_household list_dsp_none',
        'list_misc list_dsp_none'
    ];

    var task_content = '<div class="list">    <p>' + category +
        '</p>    </div> <div class="content_list"> <h4>' + name + '</h4> <p>' + description +
        '</p> </div>    <div class="item_list_show"> <div class="cont_text_date"> <p>' + target +
        '</p>  </div>  <div class="added_task_items_btn">    <ul>  <li><a href="#deleted" onclick="submit_action(' +
        val + ',' + temp + ');" ><i class="material-icons">&#xe872;</i></a></li>   </ul>  </div>    </div>';

    var li = document.createElement('li')
    li.className = class_li[val] + " li_num_" + temp;

    li.innerHTML = task_content;
    document.querySelectorAll('.added_task_items > ul')[0].appendChild(li);

    setTimeout(function() {
        document.querySelector('.li_num_' + temp).style.display = "block";
    }, 100);

    setTimeout(function() {
        document.querySelector('.li_num_' + temp).className = "list_dsp_true " + class_li[val] +
            " li_num_" + temp;
        temp++;
    }, 220);

}

function submit_action(value1, value2) {

    var class_li = ['list_academic list_dsp_true', 'list_professional list_dsp_true',
        'list_work list_dsp_true', 'list_leisure list_dsp_true', 'list_household list_dsp_true',
        'list_misc list_dsp_true'
    ];
    document.querySelector('.li_num_' + value2).className = class_li[value1] + " task_final_state";
    setTimeout(function() {
        delete_task();
    }, 600);
}

function delete_task() {
    var li = document.querySelectorAll('.task_final_state');
    for (var counter = 0; counter < li.length; counter++) {
        li[counter].style.opacity = "0";
        li[counter].style.height = "0px";
        li[counter].style.margin = "0px";
    }

    setTimeout(function() {
        var li = document.querySelectorAll('.task_final_state');
        for (var counter = 0; counter < li.length; counter++) {
            li[counter].parentNode.removeChild(li[counter]);
        }
    }, 600);


}
var mod_value = 0;

function add_new_task() {
    if (mod_value % 2 == 0) {
        document.querySelector('.task_adder').className = "task_adder task_adder_active";

        document.querySelector('.menu_button_action').className = "menu_button_action menu_action_btn_active";
        mod_value++;
    } else {
        document.querySelector('.task_adder').className = "task_adder";
        document.querySelector('.menu_button_action').className = "menu_button_action";
        mod_value++;
    }
}