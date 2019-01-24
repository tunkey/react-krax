import * as uuidv4 from 'uuid/v4';

import {krax, toastMessage} from '../krax'

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

type TodoList = Todo;

export const add = async () => {

    await krax<TodoList>({
        name: 'getTodos',
        request: {
            url: 'http://localhost:4000/pages',
            method:'GET',
            mode: 'cors',
            body: {
                name: 'poklan'
            },
            headers: {
                "Content-Tyasdape": "sdfsdfsdfsdf",
            },
            cache: "no-cache",
            redirect: "follow",
            referrer: "",
            credentials: "same-origin"
        },
        // returnData: TodoList,
        /*payload: {
            userId: 2342,
            id: 234234,
            title: 'sdfsdf',
            completed: false
        },*/
        confirm: {
            buttonYes: 'Onayla',
            buttonNo: 'Kapat',
            message: 'Bu işlemi yapmak istediğinize emin misiniz?',
            theme: 'success'
        },
        /*request: {
            url: 'http://localhost:4000/pages',
            method:'POST',
            body: {
                id: uuidv4(),
                title: 'namer',
                category: 'ahmet'
            }
        },*/
        onBefore: (/*state:any*/) => {
            /*const mahmut = new Promise((resolve) => {
                setTimeout(() => {
                    resolve('onBefore setTimeout Ends.');

                }, 2000);
            }).then((result) => {
                console.log(result, state);
            })

            return mahmut;*/
        },
        onSuccess: (/*state:any*/) => {
            // baskaaction()
            //toastMessage({message: 'nabver', title: 'Başarılı', overlay: false, messageType:'error', theme:'light'})
            // console.log('SUCCESS', state);

        },
        onError: (/*state:any, error:any*/) => {
            // baskaaction()
            // console.log('!!', state, error);

        }

    })

    await krax<TodoList>({
        name: 'getError',
        request: {
            url: 'https://api.github.com/repos/mehmetokanozcan/react-kraxs',
            method:'GET'
        },
        onError : (_state, error) => {
            toastMessage({message:error.message})
        }
    }).then(() => {
        return krax<TodoList>({
            name: 'sadfasdfasdf',
            request: {
                url: 'http://localhost:4000/pages',
                method:'GET'
            },
            onSuccess : (_state) => {
                toastMessage({message:'Başarılı'})
            }
        })
    });

    await krax<TodoList>({
        name: 'ahmet',
        /*confirm: {
            buttonYes: 'Onayla',
            buttonNo: 'Kapat',
            message: 'Bu işlemi yapmak istediğinize emin misiniz?',
            theme: 'success'
        },*/
        request: {
            url: 'http://localhost:4000/pages',
            method:'POST',
            body: {
                id: uuidv4(),
                title: 'namer',
                category: 'ahmet'
            }
        },
        onSuccess : (_state) => {
            toastMessage({message:'adsfasdasd'})
        }


    });

    krax({
        name: 'lan',
        payload: {
            a:'asdasd'
        }
    });


};

/*function baskaaction() {
    krax({
        name: 'ssss',
        payload: 'asdasdas'
        /!*onSuccess: ( state, payload ) => {
            console.log('--->>>>>---->>>>', state, payload)
        }*!/
    });
}*/