import { annotate } from "https://unpkg.com/rough-notation?module";
        const n1 = document.querySelector("#a1");
        const n2 = document.querySelector("#a2");
        const n3 = document.querySelector("#a3");
        const n5 = document.querySelector("#a5");

        const a1 = annotate(n1, { type: "box", color: "orange" });
        const a2 = annotate(n2, { type: "box", color: "blue" });
        const a3 = annotate(n3, { type: "underline", color: "red" });
        const a5 = annotate(n5, { type: "highlight", color: "yellow" });

        var delayInMilliseconds = 500; //1 second

        function hello(dispaly_element) {
            setTimeout(function() {
            dispaly_element.show();
            }, delayInMilliseconds);
        }

        hello(a1);
        hello(a2);
        hello(a3);
        hello(a5);