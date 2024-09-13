// initialize only once page loaded
if (document.readyState === 'complete'){

    const CSS = `<style>
        .pop-up {
            width: 30%;
            position: fixed;
            margin: 13% auto;
            left: 0;
            right: 0;
            z-index: 2;
            border-radius: 25px;
        }
        .box {
            border-radius: 25px;
            box-shadow: 15px 20px #888888;
            background-color: whitesmoke;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10%;
            position: relative;
            -webkit-box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.1);
            -moz-box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.1);
            box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.1);
        }
        h3 {
            border-radius: 25px 25px 0px 0px;
            text-align: center;
            padding-top: 15px;
            padding-bottom: 15px;
            background: #000000;
        }
        span{
        background: linear-gradient(
                to right,
                #ff0050,#ffffff,#00f2ea
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        p {
            padding: 20px 65px 10px 65px;
            color: dimgray;
            font-size: 15px;
        }
        @media screen and (max-width: 950px) {
            p {
                padding: 20px 65px 10px 65px;
                color: dimgray;
                font-size: 10px;
            }
        }
            </style>`;
    const HTML = `<div class="pop-up">
        <div class="box">
            <h3><span>TIKTOKS ARE BLOCKED</span></h3>
            <p>The social media productivity extension is currently blocking access to TikTok.
            We encourage mindful and timed use of the reels functionality! 
            <p>To disable, turn off the extension.</p>
        </div></div>`;
    document.body.innerHTML = CSS + HTML;
}
