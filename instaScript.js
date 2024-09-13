// initialize only once page loaded
if (document.readyState === 'complete'){

    const popUpCSS = `<style>
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
            color: #fff;
            background: #833ab4;
            background: linear-gradient(
                to right,
                #833ab4,#fd1d1d,#fcb045
            );
        }
        p {
            padding: 20px 65px 10px 65px;
            color: dimgray;
        }

            </style>`;
    const popUpHTML = `<div class="pop-up">
        <div class="box">
            <h3>REELS ARE BLOCKED</h3>
            <p>The social media productivity extension is currently blocking access to instagram reels.
            We encourage mindful and timed use of the reels functionality! 
            <p>To disable, turn off the extension.</p>
        </div></div>`;

    const init = function(){
        var mainElements = document.getElementsByTagName("main")[0];
        
        //pop up cover for reels
        var reelCover = document.createElement('div');
        reelCover.className = 'cover-element-host';
        mainElements.parentElement.insertBefore(reelCover,mainElements);

        //using shadow root
        var host = document.querySelector('.cover-element-host');
        var root = host.shadowRoot || host.attachShadow({ mode: 'open' });
        var div = document.createElement('div');
        div.innerHTML = popUpCSS + popUpHTML
        root.appendChild(div);
                
        //disable user interactions and add blur
        mainElements.inert = 'true';
        mainElements.style.animation = 'blur 2s forwards';
    }

    init()
}