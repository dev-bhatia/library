import { annotate } from "https://unpkg.com/rough-notation?module";
        const n1 = document.querySelector("#a1");
        const a1 = annotate(n1, { type: "box", color: "gray" });
        var delayInMilliseconds = 500; // Time Delay in (ms)

        function hello(dispaly_element) {
            setTimeout(function() {
            dispaly_element.show();
            }, delayInMilliseconds);
        }

        hello(a1);