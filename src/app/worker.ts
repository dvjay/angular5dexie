import { calc, CalcRequest, CalcResponse } from "./common";
import Dexie from 'dexie';



addEventListener("message", function (e) {
    const message: CalcRequest = e.data;

    var db = new Dexie('hellodb');
    db.version(1).stores({
        tasks: '++id,date,description,done'
    });

    db.table('tasks').put({ date: Date.now(), description: 'Test Dexie', done: 0 });
    db.table('tasks').put({ date: Date.now(), description: 'Test Dexie1', done: 0 });

    if (message.type == "CALC") {
        const retVal = calc(message.interval);

        const response: CalcResponse = {
            id: message.id,
            type: "CALC_DONE",
            retVal: retVal,
        };

        postMessage(response, undefined);
    }
});
