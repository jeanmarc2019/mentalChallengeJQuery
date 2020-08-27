function next() {
    $('#carousel').carousel('next');
}
function prev() {
    $('#carousel').carousel('prev');
}
function goToPage(i) {
    $('#carousel').carousel(i);
}

function answerQuestion(id, el) {
    answers[id] = $(el).attr("value");
//    for (let i = 0; i < $(el))
    console.log($(el).parent().find('.sub-question'));
//    console.log(answers);
}

function makeSubQuestions(subQuestions) {
    var html = "";
    for (let i = 0; i < subQuestions.length; i++) {
        var nestedSubQuestions = "";
        var options = "";
        if (subQuestions[i].subQuestions) {
            nestedSubQuestions = makeSubQuestions(subQuestions[i].subQuestions);
        }
        if (subQuestions[i].options) {
            options = makeAnswerButtons(subQuestions[i].options, subQuestions[i].id);
        }
        html += '<div class="sub-question" id="' + subQuestions[i].id + '">' +
            '<p class="m-5">' + subQuestions[i].question + '</p>' +
                 options +
                 nestedSubQuestions +
            '</div>';
    }
    return html;
}

function makeAnswerButtons(options, id) {
    var html = "";
    for (let i = 0; i < options.length; i++) {
        if (options[i].value == "locationMenu") {
            html += makeLocationDropdown();
            continue;
        }
        html += '<btn onclick="answerQuestion(' + id + ', this)" class="btn btn-default btn-circle m-2" value="' + options[i].value + '"><span>' + options[i].text + '</span></btn>';
    }
    html += "<br />";
    return html;
}
function makeLocationDropdown() {
    var html = "<select>";
    for (let i = 0; i < states.length; i++) {
        html += '<option value="' + states[i] + '">' + states[i] + '</option>';
    }
    html += "</select><br />";
    return html;
}

var states = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Federated States of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Island',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
]
var questions = [
        {
            id: 11,
            question: "Where are you located?",
            options: [
                {
                    text: "locationMenu",
                    value: "locationMenu"
                }
            ],
            subQuestions: []
        },
        {
            id: 1, // https://www.at3center.net/stateprogram#, https://seniorplanet.org/virtual-fitness-wellness-events/
            question: "Do you have access to a device with a webcam?",
            options: [
                {
                    text: "Yes",
                    value: true
                },
                {
                    text: "No",
                    value: false
                }
            ],
            subQuestions: [
            {
                 condition: true,
                 id: 5, // https://www.aarp.org/home-family/personal-technology/info-2020/how-to-use-zoom.html?intcmp=AE-CAR-R1-C3-CORONA
                 question: "Do you have any experience using Zoom?",
                 options: [
                     {
                         text: "Yes",
                         value: true
                     },
                     {
                         text: "No",
                         value: false
                     }
                 ],
                subQuestions: [
                    {
                        condition: true,
                        id: 12, // https://www.aarp.org/home-family/personal-technology/info-2020/how-to-use-zoom.html?intcmp=AE-CAR-R1-C3-CORONA
                        question: "Do you have any experience using Zoom?",
                        options: [
                            {
                                text: "Yes",
                                value: true
                            },
                            {
                                text: "No",
                                value: false
                            }
                        ],
                       subQuestions: []
                    },
                    {
                        condition: true,
                        id: 13, // https://www.aarp.org/home-family/personal-technology/info-2020/how-to-use-zoom.html?intcmp=AE-CAR-R1-C3-CORONA
                        question: "Do you have any experience using Zoom?",
                        options: [
                            {
                                text: "Yes",
                                value: true
                            },
                            {
                                text: "No",
                                value: false
                            }
                        ],
                       subQuestions: []
                    }
                ]
            },
            ]
        },
        {
            id: 2,
            question: "Do you find yourself having difficulty using technology?",
            options: [
                {
                    text: "Yes",
                    value: true
                },
                {
                    text: "No",
                    value: false
                }
            ],
            subQuestions: [
                {
                     condition: true,
                     id: 4, // https://exploreat.net/
                     question: "For what reason?",
                     options: [
                         {
                             text: "Lack of familiarity",
                             value: 1
                         },
                         {
                             text: "Vision difficulty",
                             value: 2
                         },
                         {
                             text: "Hearing difficulty",
                             value: 3
                         }
                     ],
                     subQuestions: []
                },
            ]
        },
        {
            id: 3, // https://seniorplanet.org/virtual-fitness-wellness-events/
            question: "Are you able to stand for any period of time and perform slow, low-impact exercise?",
            options: [
                {
                    text: "Yes",
                    value: true
                },
                {
                    text: "No",
                    value: false
                }
            ],
            subQuestions: []
        },
        {
            id: 6, // https://eldercare.acl.gov/Public/Resources/Topic/Caregiver.aspx#
            question: "What do you need assistance with in your everyday life?",
            options: [
                {
                    text: "Transportation",
                    value: 1
                },
                {
                    text: "Bathing",
                    value: 2
                },
                {
                    text: "Dressing",
                    value: 3
                },
                {
                    text: "Preparing meals",
                    value: 4
                }
            ],
            subQuestions: []
        },
        {
            id: 7, // https://eldercare.acl.gov/Public/Resources/Topic/Caregiver.aspx#
            question: "Are you a veteran?",
            options: [
                {
                    text: "Yes",
                    value: true
                },
                {
                    text: "No",
                    value: false
                }
            ],
            subQuestions: []
        },
        {
            id: 10, // https://eldercare.acl.gov/Public/Resources/Topic/Caregiver.aspx#
            question: "Are there problems with family conflict?",
            options: [
                {
                    text: "Yes",
                    value: true
                },
                {
                    text: "No",
                    value: false
                }
            ],
            subQuestions: []
        },
        {
            id: 8, // https://eldercare.acl.gov/Public/Resources/Topic/Caregiver.aspx#
            question: "Are you living in a caregiving facility?",
            options: [
                {
                    text: "Yes",
                    value: true
                },
                {
                    text: "No",
                    value: false
                }
            ],
            subQuestions: [
                {
                     condition: true,
                     id: 9, // https://eldercare.acl.gov/Public/Resources/Topic/Caregiver.aspx#
                     question: "Do you have any issues regarding your care?",
                     options: [
                         {
                             text: "Yes",
                             value: true
                         },
                         {
                             text: "No",
                             value: false
                         }
                     ],
                     subQuestions: []
                 }
            ]
        }
    ];
var answers = {};

$(document).ready(function(){
    for(let i = 0; i < questions.length; i++) {
      var subQuestions = "";
      var options = "";
      if (questions[i].subQuestions) {
        subQuestions = makeSubQuestions(questions[i].subQuestions);
      }
      if (questions[i].options) {
        options = makeAnswerButtons(questions[i].options, questions[i].id);
      }
      $('<div class="carousel-item" id="' + questions[i].id + '">' +
            '<p class="m-5">' + questions[i].question + '</p>' +
            options +
            subQuestions +
            '<button onclick="prev()" type="button" class="btn btn-primary m-2"><span>Back</span></button>' +
            '<button onclick="next()" type="button" class="btn btn-primary m-2"><span>Next</span></button>' +
         '</div>').appendTo('.carousel-inner');
      $('<li data-target="#carousel" data-slide-to="' + i + '"><span>' + (i + 1) + '</span></li>').appendTo('.carousel-indicators')
    }
    $('<div class="carousel-item">' +
        '<p class="m-5">Here are some resources available to you</p>' +
        '<ol class="mx-5">' +
            '<li>Thing</li>' +
            '<li>Another thing</li>' +
            '<li>Something else</li>' +
            '<li>Another thing</li>' +
            '<li>The last thing</li>' +
        '</ol>' +
        '<button onclick="goToPage(0)" type="button" class="btn btn-primary m-2"><span>Start Over</span></button>' +
      '</div>').appendTo('.carousel-inner');
    $('<li data-target="#carousel" data-slide-to="'+ questions.length +'"><span>End</span></li>').appendTo('.carousel-indicators')
    $('.carousel-item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
});