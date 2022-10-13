"use strict";
const ip = 'https://api.ipify.org?format=json';
async function f1(url) {
    let response = await fetch(url)
        .then(response => response.json())
        .then(commits => {
        let ip = commits.ip;
        console.log('f1 ' + ip);
    });
}
function f2(callback) {
    let callIP = f1(ip);
    console.log(callIP);
    callback(callIP);
}
function callback(callIP) {
    console.log('call ' + callIP);
}
f2(callback);
/*5
function callback (url: string) {
    let response = fetch(url)
        .then(response => response.json())
        .then(commits => {
            let a = commits.ip;
            let element: HTMLElement = document.getElementById('h1') as HTMLElement
            element.innerHTML = a;
        })
}

function one (call: void) {
call;
}

async function two (one: void) {
   await one;
}

two(one(callback(ip)));
*/
/*4-2
const url = 'https://random-data-api.com/api/users/random_user';

const genToFind: string = 'Female';
let count: number = 0;

async function findFemale(genToFind: string) {
    let getGender: string = '';
    const obj = await fetch(url)
        .then(data => data.json())
        .then(value => {getGender = value.gender;
        if (getGender === genToFind) {
            console.log(getGender);
            console.log(count);
        } else {
            count++;
            findFemale(genToFind);
        }
    });
};
findFemale(genToFind);
*/
/*4-1
const genToFind: string = 'Female';
let count:number = 0;
const findGender = (genToFind: string) => {
    let getGender: string ='';
    const obj = fetch(url)
    .then(data => data.json())
    .then(value => {getGender = value.gender;
    if(getGender === genToFind){
        console.log(getGender);
        console.log(count);
    } else {
        count++;
        findGender(genToFind);
    }
    });
};
findGender(genToFind);
*/
/* 3
const url: string = 'https://random-data-api.com/api/name/random_name';

let first = fetch(url)
    .then(resp => resp.json());

const retrieveAll = async function () {
    let result = await Promise.all([first]);
    console.log(result);
    console.log("first");
}();

async function second(url: string) {
    let result = fetch(url)
        .then(resp => resp.json());
        console.log(result);
        console.log("second");
};

second(url);

let third = new Promise(function (resolve, reject){
    resolve
    let result = fetch(url)
    .then(resp => resp.json());
        console.log(result);
        console.log("third");
})
*/
/*1-2
let url: string = "https://api.ipify.org?format=json";
async function getIP(url: string) {
    let response = await fetch(url)
        .then(response => response.json())
        .then(commits => {
            let a = commits.ip;
            let element: HTMLElement = document.getElementById('h1') as HTMLElement
            element.innerHTML = a;
        });
}
getIP(url);*/
//195.149.108.45
