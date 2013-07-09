(function($) { // Encapsulate
	function getCategoryImageUrl(category) {
		var categoryImgUrl = "";
				
		switch (category) {
			case "TV: STD":
				categoryImgUrl = "data:image/png;base64,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";
				break;
				
			case "TV: HD":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAALzQ4meSuhJKlZWyzezx9fH1+GOMsmeMrubt87bL3rPK3hRJhgdNjxxFdEt2nidYhKK70VOFtdri6srY5TlypUx5oae8z4Slwvn7/BJKi8nW4qjA1oiry/7+/rHG27bG1QhMiwROkwVOkRNIenObwOnv9PX4+hpFbdXg6g1MmYGfvAhNjQpMicTT4SJjn3mdv7jN4H6jxSNDaiBbkhJSjDNtop23zSdhlyton1WDraG3yxlGeA9LlVF5njVjjnmYtB1EaSFTgJCvzOTr8TtqleLp793m71yDpwpQkhVVkZyyxi9klRZIgBtcmAxLhQ5KgrrJ1zlsmxFJfBBJfhtViBhPgqq/0hRIeB5EbhBKfwtLhg1LgxRIdw9KgPv8/RhHfRNJfAtMhxJKfzBonIKmx02BsG2Pr83b58fT36/E2F2JsnCQrLDB0UFwnAZPlHaXtRxFahdHch1EaBhGcCFDZxtFaxZHdBlGbx9DZQNOlAJPlRVHdgNPlQxMmwJPlv///yH5BAAAAAAALAAAAAAsACwAAAf/gAJ9g4SFhoeIiYeCfo2Oj5CRkpORg5SXmJmWmZydjZueoZSgoqWPpKamqKmig3qvsLGys7S1s30pfLq7vL2+v8C+KSl5xcbHyMnKy8nDIc/Qzy5kMArW19ceCjAc0SFuQjAAEd7QKTzlzxQAf17u7+9DGB0TSNFNRh1/5Ok8PCIAAwIMUOCPwYMIBxD4Y8KFQCEGYSARKNAfxYAUSGiMUdAEGY0kcKAwWCZgDRMMKVwM6I+By5cwXeIwaCSmB4McXCJh92dAzJgtf8akkCABmZhqEsB4IVNBgg1NhL70t6KqVSRCFHhIkMPqiiYbtHqosSJGAg9o03pIM8BAEq9V/3kIAEG3bpISBwPUBVEDIQUQZxAK/lNgQJK9IARkQAxiDAaDXv7WzXEQQZK7gwcPuLE3QwYWoENTNkhgRmgWLw62YDFmCILXsBEUPEiAxGnPYU6jPjhBt42DEEDTGJ5khvEZNzYcNCEkdBjPWqJLh3DwjIHr10cafKEligE1BipIj27gYIEL4zMscMK+fYvMg3M4sXIwTXv2Fw4aMXB/wYItAAJIBQLwIYTBEltMcJAKAQJIX0RtNOjfExRSGMVjBRpURBVUDHHQERVSqMFBA8wQon9dpJjiEbQdUcGLDuigWhdEeGEQBkSo2AUVeBlkRhY6LsDEFFkUWYUKB2lQ5P+SvxmkQxYsGjREFUtmccBBHbRR5RRMMCHFFGD6YMFBFoAJphgjGvTDFEgaJIEDcDrwxkIGoVCFmVNI0aUUfErRg4IGqdCnFA8QaFAPUoxpkD7wmTEon0x8McKkI/zQ4x9HUDoCEYya4MMIaWaoAxiaTvrFF1dQqoQJGGDgqaZHeIGBFxJUEUQRreaqKwFomFHqpFd8scMeXBT7wwfIsvFAscX2AMUHUChxRRBWIGvttTqssSyzzO6xww527CHuuOSWa+656JJrx7dx2OHuu/DGK++89MIbxw4NzBHHvvz26++/AAfc7xwNNHDHHAgnrPDCDDfssMJ3FHzHxBRXbPFgxRhnfHEDWNRxwscghyzyyCSXHHIdWGABRx0st+zyyzDHLLPLcKQMBBw456zzzjz37LPOQGABhBxEF2300UgnrTTSQNCBx9NQRy311FRXPTUdMtCh9dZcd+3112B7LUMgADs=";
				break;
				
			case "Movies: HD":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAANOsrMOSkvr19cmRkebPz+7g4KE4OPHk5Ozd3ePFxYwJCf79/ZQHB4gMDPTq6owhIYIPD9Snp5lERN22tsugoIAQELZsbP36+nsTE44pKaxiYqNWVsWNjX0SEr6BgXIYGOnR0WcfH/bu7t+6urV2duLBwbNycrViYtawsK1UVJQbG9murnoVFaNZWWQgIIQODoYMDGodHX4REW8aGsJ+foQYGIoKCrZ7e5o8POfT05U2Nvz4+Oza2oQSEt7CwpU5OXYWFsqXl4kLC7FcXH8SEoswMGYgIHUWFncVFYsJCYUNDdqxsXEZGfbt7ZoFBmMhIWwcHIcODvXs7OTNzZEICNqysnAaGnQYGGkdHZksLM+bm5ciIsCJiYgeHt2+vuTHx7t2du3g4I4NDerX1+C+vvTn54IiIvfx8Y0QEK1dXe/f358zM/Dj46JNTdq+vrp4eHgUFI8HB5EGBnAZGY4ICGscHJAHB3QXF5IGBmgeHpIFBY0ICG0bG5YFBZMFBf///yH5BAAAAAAALAAAAAAsACwAAAf/gE59g4SFhoeIiYeCfo2Oj5CRkpORg5SXmJmWmZydjZueoZSgoqWPpKamqKmig3qvsLGys7S1s30MeLq7vL2+v8C+DAxyxcbHyMnKy8nDds/Q0dLT1NXTuXHZ2tvc3d7f3bp04+Tl5ufo6ed4VHvu7/Dx8vP08lR0Cvn6YgMTSyMp9ClQEWFClSprFNAYsaShwyUrtJxQITDfuCQYM6oo86fjiYxJDFzouGNNEhAdU6rsWGILyCT4bMicaWABSQMzbQxJqQbNFgcrg/5ZgXOmAhtCkird2bGMCqVCPKQkIyRLiS8JsmoFMbKjFBpQkTYYS1ZqxwRkx0ZIqSWt27ED/1IKGJBWSAMlMPLmXduRx4C/f9mkBAMjRZABQSzozWshpQgPepWMVUKZ8ospQoO2UYIiZYTKlDmkHJMGdIMoL1KnfiAls0oBGV4QSPlGderOHavgsI0agm/fErr+EdGkuBQBKXnUeAC044bfEHrM7sjhAfQXECpA15DygI4M4LsESOkFAg65OqBnEJFSA3Tt2SvI78IlpQ/5+AGkDFKBe0cENeBXgVl/7PCDgNpVIMOCMvyA2x8UMCgDEdP9YYIM9XWkhgkkdEiBcD5IuGAFRHRgYgct5JDSDSd2kEFzf7TRgX6updRCiyaWiMGOGHjQmnM8YiBBSmcUgYGKNS5wQ/mQPHaAAQs8BoBAGGGMYSSPLRyAABtusGDGFAUgIOaYYk5BgQRM7gglBkjA4eabcMYp55x0wonEk0AgoeeefPbp55+A8gkEC0DcccShiCaq6KKMNproHUAA8cEdlFZq6aWYZqqppR8AcQUTH4Qq6qiklmrqqaMyccUHc7Tq6quwxirrrLF+wMQMuOaq66689uorr0xYwcewxBZr7LHIJnussHU06+yz0EYr7bTR8gEFFjFkq+223Hbr7bfbYgFFDHmUa+656Kar7rrpkhvCu/DGK++89NY7bx4hPOHCvvz26++/AAfc7xPvumDEwQgnrPDCDDecsAshBAIAOw==";
				break;
				
			case "Movies: STD":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAOObm+d5efa6uvFDQ5gsLbomJvqmpvmamuk4OPUeHvXU1P719fhiYu4fMNF1deqJie0fH9eLi/zS0sdFRfPCwsp3d8Q3N84kJPQlJctkZOa0tOvJyd5vb+llZelcXORDQ9uSkurExP78/Pvc3P75+eesrPY1NeIhK+GlpfLc3P3m5vRwcMNaWsUlJe7U1K84OPp/f/rBwdhISOQhIa4oKP3q6uu+vtsiK/RSUsMmLNEjI/3y8tQjK8skK/nIyLEoKMMuLrdDQ9oiIslVVbg0NOogK8ImJv7u7tCGhv3h4fh2dsE/P98hIdcjI7VLS79LS7wnLKopKbYnLbUnJ9wqKvTh4fJ9ffnt7akqLdegoK9EROonJ7YuLvhdXd2pqekgIKQqKqcpKesgIOEhIdQjI/MfH74mJu8fH9wiIr8qKpYsMq0oLdAlJaIqKqEqLqQqLqYqKrAoLb9jY9s7O/HNzZQsL8glJaAqKp0rK+cgIMskJJMsLJkrK/IeKvceHv///yH5BAAAAAAALAAAAAAsACwAAAf/gA19g4SFhoeIiYeCfo2Oj5CRkpORg5SXmJmWmZydjZueoZSgoqWPpJI4BwZdmRgMBgcml6iRBwt/SUqXGDAqfwuto30JxcbHCQa4f38CJsjFJjHMfyIM0MeD2McMPtS5OMg4I98Sz9sJg2Xr7O1lGErff0c47F078kru+31FZ/8AA/7DIEGeChNnBtSQJwGDwIdF/D18iGMZtRVn4n1bgGOiwIgQQoocOdLKtxoDIAw4Qk3ECpIwQ0YUQ7OmzZtWVCzwgaMmDh8LVKy4SbRmkRNfkipdyvQLAgRbmG6B2rRq0hMn8mjdyrWr1i1ew4rdinWG2bNo03rwMeIAgrMI/wwoiOEhrd2zJ26M2cu3b98OJKiNQDDmQxJqOzz4Xbz3xg0mkCNLjvxh4TcrTB7Iq/FhsmcmjoWgGU269GgK8kR4QNNB3h8fVEybFnKDh5DbuHMLoRLA9QPcAFwH0E2cB48myJMrb8JBgbwHyzV/UzBn+XLjZLJr306mhAjEHLhnD2DxTwDx23n0YKOjvfv3AqhRkPG+vgzUzB7Uf8+mR48LAAYo4AUc2KAABwMmeAEbzc2nYID+6SHhhBRWaOGFGFrYQw52dOjhhyCGKOKIIeaQQwsopqjiiiy2mCIQGgDgoolG1GjjjTjmqKONS/xBx445QGHGkEQOacEEQBCZxv8ESyZp5BJLpjHkEhNk8EcIRRYJBRQFdOlll8GV4CUAImRwBQpeGugACUMUQCY1Nnz5JRRSTCFnl0+U8AcABYDwhwYF6JlBAQ78EUGhQxRqgwMRXHlnAVNIIcUPU1RqaaVcaPDHBn/YwMUURFRRRQY7bDBFoSxocAURUywhgqmXVvqDFHHQ8MOtuOLKhQt/pEAErizgcsUTP1TwBwsoHPtDEJvmiisNcawRBQ3UVlstEiLggoS1jVZArbEsPLGACClUcaW11UaxBhZRtOtuuy8gsWkQnCLh7gsVsBuFE14EEUWqG4SQRQbvvosFFnCEofDCYXjxhwsvhPECr3IwbPFnxRgrDAcWb7QBxscgg1FBFlqArEUWToSs8sosf9zGG27gccfMNNds880451wzHjHj4fPPQAct9NBEE00AH0gnrfTSTDfttNIE4EHAHlRXbfXVWGetNdYEqFHH12CHLfbYZJc9thqBAAA7";
				break;
				
			case "Movies: DVD":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAMJMTNqiouy6urlGRroJCeKysrYmJt2Skvjq6tSMjLtYWPHV1f78/LENDdVycv35+a0PD6oiIuzKysNUVMYzM70ICMMJCd6pqclra6MSEvXk5OrFxcldXYUdHd+cnM5kZLQTE/z39/Ta2vvx8dSCgqgQELo7O+a9vbQMDO7FxcEoKOKsrN2MjKwyMqUREdBaWuy9vdebm9h8fMx9fcRBQe7R0eq1tfTd3fHc3OjBwYMeHnwgIO3AwOu8vOChoey2tvz09LUeHsVkZKEUFNaUlOCmpp0VFZAZGYsbG6oPD/rv79mAgJoWF+O5ua4QEKUXF/z19cEWFu7W1rYLC4ocHealpbwMDMl0dOmwsK4WFpUYGchKSoEgIMgGB5IYGH4gIJ8TE/zy8pcXGJAaGvDY2H8fH3shIZIZGv/+/ssIC5YXF74TE8pBQbwODuitrdZkZIAfH40aGpoVFZwUFIgcHJUXF5cWFsMGBsUFBcAHB8QGBr8ICMEHB8kHB8YFBf///yH5BAAAAAAALAAAAAAsACwAAAf/gGl9g4SFhoeIiYdpXX6Oj5CRkpOUkl19lZmam4Obnp+PnaCjmaKkp5GmqKuqq6eDeLGys7S1tre1g3q7vL2+v8DBv30Wd8bHyMnKy8zKFhZ80dLT1NXW19XPedvc3d7f4OHfz3vl5ufo6err6c8V7/BRVTAC9T/3+AIs8O8y9f//qrxZw6+CBSsEEipUgeAPg4chwkiUCIVHG4VrBEB58LDjAw1u2ChMaAXhSAIUBPwQkEJCwz8wYT6goNADTBFYbAjgkWIETCAvRpY8SeDFgQMOEqrAApMBFJhJCTi4uYTFgaAEVMCACUOolSlgw6aAWSUsDZk2HvzpMWVLiD8I/2jUgLkk7BaYbMNaQcG3b5CXH/pOhflCBNwtN/6E2KLiLQMafZfA5NG3b4PLl+/+UWKgAYgPQGAKAOHDoRKHHxp8gHkDRIMgDt7+WYK5AYral0nAVOJjhWGHRYI0AIAmpozLNuH2TuzwgBPcDSBIl94j5m4JB2hMz0IG5gHpWRZYh6mhCIDp0xs4STLdCQAOHCYAMGEA/fQEf1Y4AQ9ggn/5JgRhn3RJ7FdCEggmqOCCCQ5QQBYMRshgCRCUYOGFFmZhwAATYEACEb2dkEMOG2xwgokFFBFDAjMIMV8EGMZooQs0uhABBhfUgAAD44XQRAJXCCHEFQkU8FSPN+SQwP8AT9RIYwkZRBllAOONF8MTUko5BBFVWsfAAFlGOQQYQ5TZwgxN4CDbeBo0EUAMMQTQhAZdooGABAEo8ESZZZI5hBFgBCpoBC0AgMEMRASwQhMb1CAFGWRIUYMEJxRwwYpXKDBAC08I6qkRf8oxx6iklmrqqaimWqocRhjBhBywxirrrLTWaqusTLiqhh289urrr8AGK6yvajAhhhZ1JKvsssw26+yzy2px7BFeVGvttdhmq+221x6hxRlHhCvuuOSWa+655Z4xRhzstuvuu/DGKy+86yJh77345qvvvvzqGwcVdAQs8MAEF2zwwQVTQUUHDDfs8MMQRywxxAvrYPE8xRhnrPHGHGvcgQ5lwCHyyCSXbPLJKJNchg5cmLHDyzDHLPPMNNccsxlccLHDFzz37PPPQActtM87cBEIADs=";
				break;
				
			case "Games: PC":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAPfox+mnB9WdF/O3J5d1I/bMafPGWsaWJcaQEdyiFvGrBfHcqOzbtMmSEO2pBv/+/PbamubGfPPp0Pfhq+usFPfkusyzddW9hPXv4MiqYvr37+y9TKR7G+rMhNarROy3N+rewZp1HsOZNPXhsevUnbmTN+rEabOFFv779d2eC+m8UezCXePGgruZR7aGFufXsfTThPnWhPnmusOPEsuXGeXKivnjsPLMcMWTGdu5aOjPlPCuFLyNHrmJFfTBRuOmFraJHaN8IPHesvnUfN/No+G0SuKtMamBH/zw0+LPotrAgu/ft+PQoezgwdmcDPOsBOGhCbyKFNSZDd+gCqh+GdKYDsyUD8+WD9ebDOSjCeakCKyAGK+CGNqdC+7gvbSPOL+ME7CGIc+ZGdGXDq6DHquAGcCQHsigRPOwE/SwD+eqFc6VD66BGJBvIO/m0dizXd+mHuiwK/voue7QidecD6Z8GpRzI5h0HqJ6G5t2HZ54HJJwIMCNE/SxE/StBP///yH5BAAAAAAALAAAAAAsACwAAAf/gAN9g4SFhoeIiYcDaX6Oj5CRkpOUkml9lZmam4Obnp+PnaCjmaKkp5GmqKuqq6d9aE+ys7MGQ7e4Qz60TwMxv78FvMNPaDsKyMnJcn/Nzn8oBskDSM/NBcrZyDvH2sg21s4o2NThfw8F3d7cDu3u7uDmzT7x5g837/k7FPnv9X82ADwzIOMZhGrOYPRzR4FCgIcQIf4rAGFgQWcfJjyDEbEjBTUdI/67UdEZwWcbNCYMCVGNGi0wY8Yc8YzksxUVUKpsBkOmTzU/sggdOpSmMxMlm+FEGUfFhqdxiEr98QOK1atXjTabs/PPUmcqsIod+yPBlLNo0Wo99+BmTrBp/+PKTZAghd27d9daWwBHIFg4RgIbgYO3MF0nXRIrTqzX2ZzEfpsVWYCiMooOixc7SSAAi+fPn4U8kzCHhAnPdCL/KSLaWQfQsAUIkEK7du3WzSLYpq168rMOu23LHlOluPHiuP9EOF5ctYcFv5kbHyNAzJor2LNjTx5BO3bVOiQ8q+E9+xoxNKyoX78+OQv26pfIOxcBPnsaNBro37+fwTMW/Ol3gHzhoJBDfgHuRwMOCDTooIMENsPCgw7ioENbzmjwBoUc4oDDDCCGGGINXpToRQ4iiugBAyZ6QcIBKcaIgxlg8GHjjTjmqOOOPOIIhhk8RCHkkEQqgQEGTZwRxf8ZGDARhRkSiCCkCBIYeSQGZhCpJQ889ODll18q8YcbL2iQQQ8v/KGBCCL8gYEIPbjxRxN/MGGnGWDmyQMQJ7jg559+HunCBS9YwIMGGPxxQZt/vJDmnH8kkcQZgFZ6AhB8nqDppppiAMIJIER6gaJHluBmM6GGemQGnLZ6aRhscCHrrLKGesGoRMjpDK63WvBHqC2UUAKtxLIRBhllbKHsssqWkGgzRDRqgQUahEqEsr6G6kwJzDJbBhlH1EHFuOSSG0YGFrTwhQVfjJsBui2Mu24L005b7r11HHEEB3X06++/AAcs8MD/cnBEEHrgofDCDDfs8MMQM6xHEAjrYfFHxRhnrPHGHGeMcAh5hCzyyCSXbPLJI4egBwF3tOzyyzDHLPPMMRNAQBt75Kzzzjz37PPPO7dh8x52FG300UgnrfTSR+9BQCAAOw==";
				break;
				
			case "Games: PS3":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAADEwMcbGxt7e3mVlZXFxcVRUVJKSklJSUsjIyMTExKGhobS0tNfX19LS0qioqHV1dY6OjoiIiF1dXTc2N/Hx8e3t7aampqSkpISEhDU0NeHh4VZWVnp6eoyMjGFhYYaGhrKysnh4eKKiomxsbGpqamhoaElISYqKiltbW2NjY0REREBAQEdHR0JCQj09PUVFRUFBQUZGRj8/Pzw8PD4+Pjs7Ozo6Ojk5OTg4OM7Ozri4uNra2pubm6+vr6qqqqurq/f3983NzZqamvr6+p6enq2trZeXl/z8/K6urpycnLGxscPDw9nZ2Z+fn6ysrDo5Om9vb9TU1Dc3NzExMTk4OVJQUkNCQ0FAQUA/QDQzNDw7PMrKypSUlDs6O7q6utvb20dGR0JBQj8+PzMyM0hHSL29vURDRPn5+evr6zU1NUNDQ1hYWNjY2MHBwZ2dnbCwsLe3t+fn535+fjAvME9PT0pKSklJSU1NTTIyMkxMTDQ0NEhISEtLSzAwMDMzM////yH5BAAAAAAALAAAAAAsACwAAAf/gFV0g4SFhoeIiYeCd42Oj5CRkpORg3mXmJmam5ydm3R3fKKjpKWmp6imd3mpra6vl3Wys7S1tre4tqx2vL2+v8DBwsB8dXvHyMnKe3xKbxwFy9LTdXbT03wCf38UARAe19d2Jizl5ufoLHs72+1AAQTp8uYmZDH3+Pn6MXtf7UcajmxzwmKfwRhkwLxYyLChwxcs/G0TEANBOwcPM75QqKKjx48gVcRgty2HCiLuPIRc+cJMi5cwY8psoYLknxwtkrT7A2GmTzNWYAgdSrQoDDU2c8Bws/OC0adWwqyYSrWq1RUtkq7Q2c7C1a9hrsgYS7asWRkwmLQLIoPrNgVn/+NewUKjrt27eGmsULstCA0eOzHkHYxFjIvDiBMrdiGD758gLlBui9JisWXDMzJr3qxZRgkFIRqsnbHBQgIRdzir1uxiRo3XsGPXQGEkikAjOdbWoEOAy4UFCxxE8LBCduwZWmwoX678zocAQHYayL0twYkhO//tMKCC+XItXW6IH98CApqdQJZwUMGgXQIF24Y0iCBhhE0n4/N3eYKjv/8IO+WAQR42kJCCaNssYYQGXBRwQwFCMIDdNhf4Z+ETVEih4YYe2KTEBwpoY0QQ7WxRgw13RNDAhNtoEMEMG8aYYYwb7gEBAuftBAF1fwQwAHQ7xfEGFDDQSOMEaSSp5P+SKtT3wAgSsNdOG25RUEYIaiyppZJIpqHHl2CGKaYeBJRRwR9LMLUFBnaM6aYeSr4p55cHGGAECQTUMKebaWTgx5+ABirooIQWOmgGWQSKARI+NNqoAzr4sIKiARThBBIWuPAAEj902qkDXjgwaaCJ4mEqHnVsUMCqqx4ABU+n0vFHDxvUWkAaKrDK6gEP/NHEqab6MQawxJ5qh6+nevDHA8U2ewcQSBA77BTUTqFCEUvAocO2C+SAQB3VSvAHB9VSK4cX26a7ABtnrFHuFHi8W8QfJdiRiR3xVovCuO+uYMoeI5whxLvU9mFwH0tQoMfBDDM8wLINR2zwCkPo0PBeFAAwbKYNEfshxAJK9MAGTg1zAEIPKKNcBAICrNEwABkf/EAHaXTcQRNEECEEChGPQAQPQActRAkRwyzx0UgnfXTMSjft9NNQRy311FRXbfUcWGet9dZcd+211gYHAgA7";
				break;
				
			case "Games: xbox360":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAKasmsTExGlnaamzlZSpaMvVrImbZtvb2zOtA2yMak+MT+nq1CqdFTOFKM7OztHR0bOzs3TXF6Ojo7S9q63rT4/jLbq6uqSyh729vYKDgnu5M5KSkpajfsHBwZykjHx7fEqsDu7u7ou6S3Rxc+bm5pycnKquorm9sba2to2MjKzJct7e3tfX142hZevr6+Hh4Vt5VlrLCayxpvDw8JuUm3NsdEqKQfb29r7Bt3p1e6ysrOPj46+vr4adWaGtitj+h3fQIvLr8qSbpIqXi/v/4MTOxp2yepGOlMjFyIJ7g4mEjMrKyqmirJ+mkaqqqqutp7S1s83Mzbi5tf39/fz8/Pr6+tTU1Pj4+PPz8+jo6PX19b2/uW9tbn99fr/2Y4eGhqampo6YknnBXn2bQdXS2rK6oeH/lMHTk8/J1dngvXB9cbGwsZGicIjbQa6rs43Oa8z9cHR3Z6CfoJmci8fDx7Owt5eXl8vLy8jIyJaWlqSkpKGhoaioqJ2dnfT09P///yH5BAAAAAAALAAAAAAsACwAAAf/gC5+g4SFhoeIiYcuN3+Oj5CRkpOUkjd+lZmam4Obnp+PnaCjmaKkp5GmqKuqq6d+WFOys7S1s1gsGCgYLDe2v7RYM1TExcbHVDN0QkcpKV9KNEh+yNXEMzNV2tvc3SwNDQpDQjQ0GTYNNlnd7NszIVfx8vPzUecICAwJYQoM+DYfXtAbGC8EoxsIEypEyCJDHiZGgMTIhyAGEANJRnw5uHChCxdaQoocGTLEhhR91qBJQyFCjAoU5ijpMmIEDz8kc7rIgqWnz589O2TYsMdCkAlvflAwI0ZNCpojMryYARRoFhLYsmrF5mLD0D1IijBoQ6QsEAYZaHL50GHqVq0k/3aEmEu3bggWXTKkkFOHQYwfWshkgROjQY4RXLrocGDX7o4XHyNL/hglagoaChB4WRBljRyWCGDUSKwnwOTJL1ZkWc26dZYlI7ooUYOgQgE3fEqkUHKmAgMBUcEEcO16xQoSyJMrJ7FkbZIGEVQc2XDyS5ccKgrnSAHhzvLlKw682EG+vHkWNWEgEKEkw5cMaXNwGaGBgZo8HViY3//iAIsXAAYoIIB5CNAACF18kOAHh3HBhQBxgGADE/8NOCALLBin4YYa4mGgaDXV5KAAAnCRQwINQMDhiiuwYMUBMMYoY4xDNEDijTiamIEdNhQx448HWPEAhkQWWaQDajyIY/+JI3zwRR5ryGDklBg+4IAVWGappZZIbNDgfE3qVQIPUWxpZpYOLPHAmmy26WYUPDzzxRcpbFACHxi4qaebS+ARhQOABirooA7gIQUPOqyBQgd/EuoooFHgEcASd1Rq6aWYZqrpppcuEUAHeIQq6qiklmrqqaV2gEEArLbKKg4TtDoBDmUMYOsJr15gxAUdwCorDq66isGwHRRrbAdbELBFBycoS8CuFyib7AVlRNvsCcwqe6yxw1pgwbDggjsBAVIQMAEGBIB7wQDrgjuAD+OWe2644HqLghTe5qvvAGMMYMEAPfjwLgEytICvt1K08G+/+jYsBQoQQIHCxBRTDMDaGCZAwUHAAPjQAgAtSDwxFCFfDEDFKEMBAQ9rQODyyy6b0ELBMkDQwssAsMGGCS/LsPPMLfAM88trIKoDD0gnzcMTBpjAAwAGPNEDACbk3AQAUz8BdRNN82BC1EonrYMOTjgx9tlje9DE2WpzYMDbHIzN9dtNNOHB2XajfXbZYIDBx9+ABy744IQXHnjfEkigx+KMN+7445BH3njicsixx+WYZ6755px3nnnlJZTQx+ikl2766ainXnroduRhx+uwxy777LTXHrvreWyQx+689+7778AH37vugQAAOw==";
				break;				
				
			case "Apps: PC":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAKLTpRF+GTWJOmWjaWy4cIK5hpnTnQSWDnSreBt0IUuwU0GZR8HbwnLGd6XUqIfHi0+oVRV4HNvv3anVrESsTAuWFvr9+nvHgAmNEun16V6yZDWdPB2VJpLOlp3VoQeQEPH48aHJpCKHKT2qRLPdtlK0WcLixMvmzQqLEyyZM77jwAiaEyOfLGS1ah2mJz6jRfX79jOpO+Hy4u7279Dk0g+CF47EkgyHFRyDI5TJmCqkM3S7evz+/BN7GhGKGg+OGQaSEBZ+HlWkWwuIFCBnJRKGG6/ashhyHovQkCZ9LXC9dQ6SGBSAHeDt4Q2IFbHSs1GdVhShHqzYrxaGHVauXGC6ZwKZDQOXDRCAGA2FFgWTDw6EFhR5Gxd0HhZ2HXGxdQePERh5HxSEHRWYIPD28BdzHhV3HBZ1HbvWvUeyT5jIm6PXpqfaq2u9cNbr1/f7+L3gv5K/ll+dY7fYugKYDQCbCyBpJRttIRpvIB5oIxxrIhlxHwqaFQGaDACcC////yH5BAAAAAAALAAAAAAsACwAAAf/gGN8g4SFhoeIiYdjK36Oj5CRkpOUkit8lZmam4Obnp+PnaCjmaKkp5GmqKuqq6eDdbGys7SzLh5Rtbq6fBV9v8DBwsF8MgbDyMgVvsnNvw1/ac7Ny1bW19jZ2VEzElHa4NnLdOTl5ufoSH9I6O3ny1fx8vP08RcqMVc6MBYj9f/zKiw5QLCgwYMHSiBR4YHgmj8n+CCcWHDJQIoI0/yxwIYFwRgw/lzAONGilpMoU6qsAuKPigooH4LQobJmSotAcurcubPKmjYkYuzc98cIz6M7l/z4cJSFgqcKRrDI8AeEVApYKXDo8OcPhTFQFVBgcfTDjx9gPqhda6Br1w5t//9IKEHVrYQRVE1QsODWwpq1a8GcxQCmsGEPdjWE/KOBhFu3D9p0VYK4K48Jhg1j+OEDg+fPGOL+UWKiq5QWj92CeGFCApUUb7pacAD6sw8fKHLrRgGgK5wdXUFQkZHaLZwULaRQ4drVyG7dt4c8R0HAyAQNxP88eCHFgffv3gFwcPDHzQsHUiYomT7ER5Eh8OPLz9FVBgf5+ONvAGFhQ378RRSRxQ0EFkggBHz90YKBDDIIwQ4aONFggVkUIUYWGGaYoQ2+Cajhhx9O8McOIGoohhhbpKhiiinkkMMJL6wo44xbUFHVAjSmKAYTNfToY48aQCTCj0QW2eMUNPxhwv8URtbABBNYRClllGpkIMSUWGY55RddFSCClkwEEcCYZAaAQwgLlKnmmmqK0MQfNgjAZhBB9LAmDkKU+YWcC3yxZwB+QiFCAAukOWYBc0CBw5o9BBFGD5BGKimkBfwRQg8huPWEW2Qw0BUDk4YKaRhhcGHqqaiaSgMZZIgQQhNQePpHAVz+QcMXC6Sqq6mkmhHBr8AGC8UfmxaQaZduNSHrE8E2C6wZYSRwhhfUVmttpk2QQcOrCAggwB9xQJHEAAN4KoC16FJ7RgIJlNHFu/DCm4S2IXiKRhPvfotAF/N2RUO8AMNbBrtHFGzwwUd0WzACcgxgsMJHJIGAwwhXXHBQAnjsofHGHHfs8ccge4wHHneMbPLJKKes8sool3zHyzDHLPPMNNdcsx4456zzzjz37LPPduQh9NBEF2300UgbbYcdRCzt9NNQRy311FA3HQgAOw==";
				break;
				
			case "Apps: MAC":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAKLTpRF+GTWJOmWjaWy4cIK5hpnTnQSWDnSreBt0IUuwU0GZR8HbwnLGd6XUqIfHi0+oVRV4HNvv3anVrESsTAuWFvr9+nvHgAmNEun16V6yZDWdPB2VJpLOlp3VoQeQEPH48aHJpCKHKT2qRLPdtlK0WcLixMvmzQqLEyyZM77jwAiaEyOfLGS1ah2mJz6jRfX79jOpO+Hy4u7279Dk0g+CF47EkgyHFRyDI5TJmCqkM3S7evz+/BN7GhGKGg+OGQaSEBZ+HlWkWwuIFCBnJRKGG6/ashhyHovQkCZ9LXC9dQ6SGBSAHeDt4Q2IFbHSs1GdVhShHqzYrxaGHVauXGC6ZwKZDQOXDRCAGA2FFgWTDw6EFhR5Gxd0HhZ2HXGxdQePERh5HxSEHRWYIPD28BdzHhV3HBZ1HbvWvUeyT5jIm6PXpqfaq2u9cNbr1/f7+L3gv5K/ll+dY7fYugKYDQCbCyBpJRttIRpvIB5oIxxrIhlxHwqaFQGaDACcC////yH5BAAAAAAALAAAAAAsACwAAAf/gGN8g4SFhoeIiYdjK36Oj5CRkpOUkit8lZmam4Obnp+PnaCjmaKkp5GmqKuqq6eDdbGys7SzLh5Rtbq6fBV9v8DBwsF8MgbDyMgVvsnNvw1/ac7Ny1bW19jZ2VEzElHa4NnLdOTl5ufoSH9I6O3ny1fx8vP08RcqMVc6MBYj9f/zKiw5QLCgwYMHSiBR4YHgmj8n+CCcWHDJQIoI0/yxwIYFwRgw/lzAONGilpMoU6qsAuKPigooH4LQobJmSotAcurcubPKmjYkYuzc98cIz6M7l/z4cJSFgqcKRrDI8AeEVApYKXDo8OcPhTFQFVBgcfTDjx9gPqhda6Br1w5t//9IKEHVrYQRVE1QsODWwpq1a8GcxQCmsGEPdjWE/KOBhFu3D9p0VYK4K48Jhg1j+OEDg+fPGOL+UWKiq5QWj92CeGFCApUUb7pacAD6sw8fKHLrRgGgK5wdXUFQkZHaLZwULaRQ4drVyG7dt4c8R0HAyAQNxP88eCHFgffv3gFwcPDHzQsHUiYomT7ER5Eh8OPLz9FVBgf5+ONvAGFhQ378RRSRxQ0EFkggBHz90YKBDDIIwQ4aONFggVkUIUYWGGaYoQ2+Cajhhx9O8McOIGoohhhbpKhiiinkkMMJL6wo44xbUFHVAjSmKAYTNfToY48aQCTCj0QW2eMUNPxhwv8URtbABBNYRClllGpkIMSUWGY55RddFSCClkwEEcCYZAaAQwgLlKnmmmqK0MQfNgjAZhBB9LAmDkKU+YWcC3yxZwB+QiFCAAukOWYBc0CBw5o9BBFGD5BGKimkBfwRQg8huPWEW2Qw0BUDk4YKaRhhcGHqqaiaSgMZZIgQQhNQePpHAVz+QcMXC6Sqq6mkmhHBr8AGC8UfmxaQaZduNSHrE8E2C6wZYSRwhhfUVmttpk2QQcOrCAggwB9xQJHEAAN4KoC16FJ7RgIJlNHFu/DCm4S2IXiKRhPvfotAF/N2RUO8AMNbBrtHFGzwwUd0WzACcgxgsMJHJIGAwwhXXHBQAnjsofHGHHfs8ccge4wHHneMbPLJKKes8sool3zHyzDHLPPMNNdcsx4456zzzjz37LPPduQh9NBEF2300UgbbYcdRCzt9NNQRy311FA3HQgAOw==";
				break;		
				
			case "Music: MP3":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAH4rqapU2JMny40owpom1t2184Uqtena8YopvXQumLda56Em25lDxYk6spYtzfnz/Nm464ErrsN36vbt+6c34ZtVv93E6tio8Zs10a5J46U83J4l3qVcy7105P78/qNkw6Ak4cWW3X0spJAoxuLH8OrU9pYm0ZU7xZot04gpurRl3s2R7OC98vz5/qJF0/Hk+Jk7y+bU8JI0xKMw3+PL8PHi+c6l5K1g1mwvirNp2p0s2cqK7KpL3Lx83bhj5aIp4tSv6J1RxbBY34MqsbyF2OTR7rxu5J8806ZN1K5xzdGq5tWi75sl2bh03Iksu8+d6sWF5cWN444pvp0l2+3b96Ql36pD4IUzsJEtxYkqtqRA2ceA6/Hf+rRh36FLzYwswKEk46Yl5JgozoMtsYYrsZUoyG8uknAvjpEpwasn4bRz15A5vvHn9okvuYwsvaEo4LFQ5cmh3dit73gsn3IulnsspW4ukHYtnGsvinQtmW0vjHosonAuk6cl46Ik5P///yH5BAAAAAAALAAAAAAsACwAAAf/gGl9g4SFhoeIiYdpYX6Oj5CRkpOUkmF9lZmam4Obnp+PnaCjmaKkp5GmqKuqq6eDYLGysjMzs3AFW7O7vL2xfVUgwsJvP8IUFCDGIBJ/DxnD0dLT0lXB0RIFxRQKVgozzH9/BdTl5dYb6elPK3AbM3AU8RQ74n8Xb+r6+/zqVQv7jCjYUcuKhgwUNqywd6+fQ34LFkyZOFHDkiVTZmzxkcEHhQt/JnARt4OiyZMoJ0ZkwpIAEwo1OjCp54OJFR0s/myZ+YeLDngzWAoVqmOo0AVMCChVuqIEDx1CjPCoIYdATglK5fyB04yFhq9ftWjoQKWAlaVKk6K1aoQFDSME/4SU6KKFyp8uGgh0+dNhyR8PEwJPeEC4xV8ha5WaWGwCgxwoBYzI4aFFCwoUVDzwMHEkQIsuBRiKFlcCBePFBMQwFoNiBZQOKqAIMYFCS4DAAUyrmBDA7miGT04vFiNGwHDOOQJ06IHBhQvOD2o0F/NEToAHvxl2ES6AuIDv4B1gwHDDgQAHR5BExyAgBwsHAcQZ9kCf4Ysj5sF3L6MffI8nASAhABJI3PAHCTC4EEUAAvRwoAtN5CBhDj1gB4ED+YFXRhkjdOjhCFHQcAMMNvxVwx8QjKCGCyPAAMQfT3yIxQgG/tHEhx5yOACOI2DBABYBeMCQEjBg4cWMEPzRA/+PIYTEAI87ojHAlFRWCcMLDOUgQ5FeyFDCHzcwwMAJWGAxAAl/WICFDGZWiYYUCMQp55wIcEDDBGyE8AUCDMjwBQcPTHACAjKccAIDgP5BBAJ70ikFnHRG6gYDa8jpxqAc/FGEG3Qm8UcLQUQaJ5wplGrqqaiWukYPIdygxh9AiOmEqUr8QYOpTsxqKgJZGODrr8AGa0AbFsg3gaIGrBEEA8ke8EccwzohbBa9CmutrwxgxxAHQZDARgw2hCAkB9cakAUZQ6Sr7rrsppukPQdU4KxoVFyh7hhjrEsGGRH06++/APfbQAgHsGFBBRHMy1AcEYxxxcNj/MsvABRXbPG0xRZf0UAEFCdhmD0PfPDwFRxfXDLGKKdc8QcWHHBAER+oXLEIddRs880456zzzjmLIMIeQAct9NBEF2000T/PofTSTDft9NNQO73HHHdUbfXVWGet9dZZU53H12CHLfbYZJc99h0J8EHH2my37fbbcMfdNh8J0GEGH3jnrffefPftt95m0MGHHnYUbvjhiCeu+OKH6zE4HpBHLvnklFduOeV6nIGDHpx37vnnoIcuuuc4nBEIADs=";
				break;
				
			case "Music: FLAC":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAGouidPC2+3n8G0zimAweurj7nAslJt6rLyezG0tjq+SvotZpKB1t5Nlql4xdf79/nU8k+Xb6m8tkMS1zN3R42MvfVoxcHM0lJ93tZVprPXx93NLioFFoNzO46mDvWguhmQvgKSNsbysxoJLnm8skriax3lTjtfL3Y5kpL6jzHpDlt/V5aCGrodcnYhSpPv5/MSq0XA4jXxGmINWmvbz+K2Iv8691uHY5bWSyGcuhItqnNjP3vr4+3hMkM261oVPos+72Wkwhno9mY1fpPDr8rSivrmlw+PW6fn3+lwxcn9NmXZCkeje7GQ5e2s3hnA8i4FikrCXvWUzgPv6/M7B1GYvg5BeqXMsmIhknJlxrZJvpNjH4tXF3s622sm50aZ/ur+mzHc+lKqUt4Bck3xPlF00c2A1d3c4mF8weGsti8y/028wj3grnmUvga+OwamPtphrr8ex04tVqK+bum1AhmhCfVUyZ1gybVcya1oxblQzZVUyaFYyaXQsmnEslf///yH5BAAAAAAALAAAAAAsACwAAAf/gGx9g4SFhoeIiYdsV36Oj5CRkpOUkld9lZmam4Obnp+PnaCjmaKkp5GmqKuqmXJWq5KtlBc4CBexkH1XBr2+v74XEX9dHMDHZ11bxse9V7zNBhx+Z7gIf38aCELNHF9c2C7RBs8k5ufnQnJyLhcM2NhMxjUMHB4BGvA8Luj9jRIAA8L5suaMizM/hPx4IYBBiSlcRkx5kA8eNh4/AmoE6GijhBolFlwQ0uCHCw5MBJyRkOUBgyMWLU6xssYjRwMJcuocwSDFhQYRRnhQAeOPFSEXtrgBEvNBAR4PrOicmtMACao5G3S4kKFGBiI/PPzBsGZNihJF/zw4giDDCCZ//xYkWIM1AQkJdeFwyeBhhIwFEBb8SREGQgkrYhEAzrkGJk26WAGmmUw5DYYSPhCUUHEBgooCK9aEQQABw58vldNQMJogNWW8AFwvAFMDjocfKjjD4DGigYs1Df6ACaMiDPEOf4ZMXpMaQE4A0KMDGJAly4IMSqAvSPGngQoZxmkAGQAhxgAAAZJPlx69NXvpMWRkyLAkzsQ/bsovUSJgBXumGbwXXRoAfGDggQjOEAEKLVj0xQAyDPABF0QosYRnS4AzhIEDDBAEgtDlgOCIHyzRoQ9T8ODDEwYOkYEPSOznAxNP/YFCEOZ9eGAOIebg449A/hjEDDP8qAAN2EwxxP8JMTXgYZA+FljFlFRWWcUBAdjwRBYpZFGFE0TA80ALyMFzwxNWVvlBDm206eabMwigVgs+/FFCm1EgkY0CbZDhhQA3lEDGm4S2kUMVICSq6KJe/EFDAC2AE4WiM6BAxqJPSLHopopW0UYFoIYaKh3DgOFEBUxGUYEULRygxRKi9nDAAT2IamsFbYBwK6hYcPGAozag+oeqWsAjgA6gvlEREqruWoGuBEQrbbRRIInNCQSkSsAbFNgQZgRSHPCrBkQ8cMC06IKKrrQbjAGXERtkOywBdJiwARZT0GDCDX8EsAEdWKw7bQUEoGHwwQiv8EcIBjMpRhMTvPDACUgQocP/RGMgrDHC0Trg8ccfm8HvGx4zGQILfxQgxmoF6PDAAyaALDPIBc8c8sglL9woCw6Y8IcAJoRZhMdN2PwxGg4kofTSS4u8sNImG/HHDjqI8HMTVv+hhgg3jMH01x5b8HXTBfwhhtIKiwHFr2r9QUQZdexg0QRjK21B0hbkrbfeZRQxARR5z+GFDhaEQIUaIUxQRBkWbCCCGlsDvvfeSt+Rx+WYZ6755px3nvkdSVhwx+ikl2766ainfrroeLTu+uuwxy777LGPzsftuOeu++689777HXjYscfwxBdv/PHIJ1+8HXjwocfz0Ecv/fTUVz89H3joYcf23Hfv/ffgh9+9BB54BAIAOw==";
				break;
				
			case "Music: MVID":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAANzS3bmbuvj1+PXx9dG+0ZJrnqN9pLOatODU4aZuqLugvKmIqv7+/uTa5YJii9G70X1ehdnC2nhcf3FXdpxpntnI2ZhwpbOStObd582wzqRtpvPr89zN3eXW5pponLqSvMqry4xijt3K3qyCrnRZeZlomrODtOLY4sSsxcWlx9O31Jx6ncCbwad+qIReho5ikGxUcPLq8qx8rpJkk5Zuo+ng6Z1qn7SLtcy6zeDR4Z50rothjOvj7O/o79PD05Vml45qmaByodrN24NdhKp1rM60z5dnmaJso8qwyvTu9JpxqaN2pfz6/Pr3+pxxnpxtnfHr8efe58uyy5JslODN4I1pjqV2p6JxpOPV4697sMOxxJNlldi/2YdfiIhgipBjkaBroqNtpffz94hfidjK2Zl6s4dkkG5Tb3dXeaN0r4xnl4lmk4tmlZhnmoJcg5xzq51zrHhYeW9TcHRWdYBcgn9bgHxafntZfHZXd3JVc21Vcqhvqqlwq6B1sKpwrP///yH5BAAAAAAALAAAAAAsACwAAAf/gGV9g4SFhoeIiYdlaX6Oj5CRkpOUkml9lZmam4Obnp+PnaCjmaKkp5GmqKuqq6eDfLGys7S1tre1fTp7vL2+v8DBwsA6u78gEVzKy1wRRVlEvinJzMsqLFnEcAnc3R1/4OHhDCogJtwfYuLrSVQiRN3ccG/x3N/r4k0iAyAfTfjiNuT4cy7eGyUaEiq8BxDchghU1DUEF4MKAxMfMrCQoUGJkjAgQzKcuCHJxHAVmWRIISMFiDAej8icOfIkwA0sIlCk8qeIzBsgjiixAKao0Zo2/zDpkSSCDDAZKGKhcgSMjCIswFigYaOrV6Q2H1yxYmOERXADMpDNOAKMDRpc/712BTuxyYeuXNYNWGIDqNuucCkIHowlaTgRLQQv0RdgA7giFK5IuTKYAo0CHjJrLpy0RwAPKSp4CBJjhAcRfwRYAX1Bc+YCBdqUmD2b80QGKJ4E4fAnyZMnAxSUIPAHSYklPUbQLtEGtpHn0G03ZNCiBA9wvo1AyWFEipgnRor8aQH9eQEgP9KrRzBxwIA/PWoo5SEmyI8aTZy0uPDDCe8W6qUHBBBbFGggew01oMB7qRGAgwBObNHAHxcU+MMDCDBggIEFAqHGDCCGiCBAUVTwgAACVNCAD0mUMAMGf0gB4gI9cKBhiCCqwcYXPPY4Ij4N1JDDAgcEYEAAUGzxxf91DfCoQBJCaNgjj2ys8cKVWP64TgNRNIDlCwp4+UIUShnwAgoDkKHhly+sYcYOIcQZp5bicHmCnCEoIMYUIRD3BwZoQqHmCnjuYMabOySaKJ3h2KnoDgH8scIOF6zTw6CPGurAGF502ikAEzWAwQmeenHAHwdM4Wc4lzKwQqljOOBAF7TWCmqCUWBQaxenMgEFPpdKumsXsg7hwrHHTtgQDw1ogawLpzY0gBAnVPHsEA5A4MYQ3HKrBQDghhsuDgdU0e0QC4irrg8KrHDuEG5AAEEddNRr77345qvvvvfWIW8dAAcs8MAEF2wwwRBIcIcdDDfs8MMQRyyxw3dIoPBnHRhnrPHGHHfs8cYWoxHHyCSXbPLJKKdcMhoSkDAHHjDHLPPMNNdss8xzkODyHDz37PPPQAct9M8kTJDH0UgnrfTSTDe9tNFnyCH11FRXbfXVWFN9Rh56wKDH12CHLfbYZJcdtteBAAA7";
				break;
				
			case "XXX: SD-CLIPS":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAOvM6Ls4ra44ovpk6/rH9eVw2fU44uCk2rMuptN8ytViydaj0fkz5MIytKctm/HK7MVlvPE43sMrs8t4wv/5/v3r+/O07fdK5cwyvKYymslTvbpBrfiT7vVX5cA4sv78/slJu9wyyuwz2fEz3vOF6Pku5OzU6uSM27NUqbY4qfCg57swrduZ1bNOqe843PXk8/qq8uQ40d551KozndGMyvvR9uxG2+go1K5HpKEzlf3d+vbb88+Ex+Yy1P73/a0ooKE4lug41uKv3Oeh36w3oPl87N6D1NQxw89wxuvB5tQuwq8vovu19PMu3vlw67tVsfC+6+e84vYx4bI4ptWTz6U4mag4nf7l++o42Pc/5NA4wOE4z+O13/Da7uy25+Evzr1ks/z1+/7y/L41sMc6uM04vdM4w+042tY4xeY41Ng4yMo4u944zdw4y8Y4t8M4tZ0ukfnw+dlrzbY2qeto3sE7s/ji9rxIsPzW+MZBuJY5jZ44k5o4kJM5ivk45f///yH5BAAAAAAALAAAAAAsACwAAAf/gH6Cg4SFhoeIiYqLjI2Oj5CRiCUMkohZfiWMJUUDlZaEJU4EA5SJnB9FmqCDJQN/FDAXq4WiFH9OtKwMWVd/fzqlhQwXvri6rCUwv38+qoQMTMy5jAbW19jXUh23vx8kJdbb3R8DUtno6epSy8wUTk0GTRzMFRcj6tgR+/z9/SNZajD7U6FDkxEEmBHwx7ChQ34jLghkhmefDmYcmjzs56Kjx48gXYiwIY0ZDBfGwnQYEbLlmZcwY8p8KULEKB+/SFz8A0PEzJ9nsAgdSrToUBE3sBTB80eMGGA2RBidiiWI1atYs1rtEYREjQo4vdG5obWs1TRo06pdm6aHDQIf/z4M/GWBrd20MfLq3cs3r0A6dOTOLfClr+EYWxIrXsz4C4lfKlTMpfuFsWXFbDJr3sw5BJTJcwmE4Exac5vTqFOr9gx6oIUQqmOjVkO7tu3bRwp0a61Cye3ftdEIH068OJrcO1r/OaHEuHM0ZqJLn049uhIzMpLPpaDgSPXvZrSIH0++/HgMEh782WGnKRQ5GMzLF1+mvv37+OtjUCBniBcZJwwBoBEY5GdgfWskqOCCDCYogRF/PFDBf1BAMYQCDGLQ4IJudOjhhyB22IACDxjxwANyKECGBA18mAcUCrQYohtv1GjjjQ3c+EaOOUqQBxINSLCjjUGC8EcCQupYo/8HTDbZZB0aeDCGlB5oAGUdY4yxQh5WWpklCBog8UECKzjpZABoponmChB8IMQKcB7wARJxvKllEjskEAYEKxwQ1h9IrKDmoIQGMEcAXPxxAAIs/BEFooD+QMMfLCTwBwSWJpEAFX9MgEChAaQg6qijzpFCFH8A8EcSKSCwwQsvIOEDAAhYCkEUcaTwwx2dIkAqqVMEK+ywS0zRxR8vpFDsEm1+EMcTP/BwqRAfQLDEE50WO6ywAnTr7bcO0PBBGB9Q4UC3DnA6gQMOSAvBE2H80cULnZ77rbdE5KuvvjNMagIKqtIwQ74CTJDvDE8I0YIDYHABAAALtDDwvvpaYfFzxRZnAIa8ODiAgwmXZmCxAxdnQLIVJmeQMsYsV+Hyyy7ngELEOVSRQwsLoFAzzDz37LPLQAQttNA5wJED0UYPrfTSTA+9x9NQRy311FRXXTUfWGet9dZcd+2113qELfbYZJdt9tln96H22my37fbbcMMdCAA7";
				break;		
				
			case "XXX: MOVIES-SD":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAOvM6Ls4ra44ovpk6/rH9eVw2fU44uCk2rMuptN8ytViydaj0fkz5MIytKctm/HK7MVlvPE43sMrs8t4wv/5/v3r+/O07fdK5cwyvKYymslTvbpBrfiT7vVX5cA4sv78/slJu9wyyuwz2fEz3vOF6Pku5OzU6uSM27NUqbY4qfCg57swrduZ1bNOqe843PXk8/qq8uQ40d551KozndGMyvvR9uxG2+go1K5HpKEzlf3d+vbb88+Ex+Yy1P73/a0ooKE4lug41uKv3Oeh36w3oPl87N6D1NQxw89wxuvB5tQuwq8vovu19PMu3vlw67tVsfC+6+e84vYx4bI4ptWTz6U4mag4nf7l++o42Pc/5NA4wOE4z+O13/Da7uy25+Evzr1ks/z1+/7y/L41sMc6uM04vdM4w+042tY4xeY41Ng4yMo4u944zdw4y8Y4t8M4tZ0ukfnw+dlrzbY2qeto3sE7s/ji9rxIsPzW+MZBuJY5jZ44k5o4kJM5ivk45f///yH5BAAAAAAALAAAAAAsACwAAAf/gH6Cg4SFhoeIiYqLjI2Oj5CRiCUMkohZfiWMJUUDlZaEJU4EA5SJnB9FmqCDJQN/FDAXq4WiFH9OtKwMWVd/fzqlhQwXvri6rCUwv38+qoQMTMy5jAbW19jXUh23vx8kJdbb3R8DUtno6epSy8wUTk0GTRzMFRcj6tgR+/z9/SNZajD7U6FDkxEEmBHwx7ChQ34jLghkhmefDmYcmjzs56Kjx48gXYiwIY0ZDBfGwnQYEbLlmZcwY8p8KULEKB+/SFz8A0PEzJ9nsAgdSrToUBE3sBTB80eMGGA2RBidiiWI1atYs1rtEYREjQo4vdG5obWs1TRo06pdm6aHDQIf/z4M/GWBrd20MfLq3cs3r0A6dOTOLfClr+EYWxIrXsz4C4lfKlTMpfuFsWXFbDJr3sw5BJTJcwmE4Exac5vTqFOr9gx6oIUQqmOjVkO7tu3bRwp0a61Cye3ftdEIH068OJrcO1r/OaHEuHM0ZqJLn049uhIzMpLPpaDgSPXvZrSIH0++/HgMEh782WGnKRQ5GMzLF1+mvv37+OtjUCBniBcZJwwBoBEY5GdgfWskqOCCDCYogRF/PFDBf1BAMYQCDGLQ4IJudOjhhyB22IACDxjxwANyKECGBA18mAcUCrQYohtv1GjjjQ3c+EaOOUqQBxINSLCjjUGC8EcCQupYo/8HTDbZZB0aeDCGlB5oAGUdY4yxQh5WWpklCBog8UECKzjpZABoponmChB8IMQKcB7wARJxvKllEjskEAYEKxwQ1h9IrKDmoIQGMEcAXPxxAAIs/BEFooD+QMMfLCTwBwSWJpEAFX9MgEChAaQg6qijzpFCFH8A8EcSKSCwwQsvIOEDAAhYCkEUcaTwwx2dIkAqqVMEK+ywS0zRxR8vpFDsEm1+EMcTP/BwqRAfQLDEE50WO6ywAnTr7bcO0PBBGB9Q4UC3DnA6gQMOSAvBE2H80cULnZ77rbdE5KuvvjNMagIKqtIwQ74CTJDvDE8I0YIDYHABAAALtDDwvvpaYfFzxRZnAIa8ODiAgwmXZmCxAxdnQLIVJmeQMsYsV+Hyyy7ngELEOVSRQwsLoFAzzDz37LPLQAQttNA5wJED0UYPrfTSTA+9x9NQRy311FRXXTUfWGet9dZcd+2113qELfbYZJdt9tln96H22my37fbbcMMdCAA7";
				break;						
				
			case "XXX: HD-CLIPS":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAOWt4KFLmIQherYRpfrz+ZsZjsEwsvTl889Zw6ssnqQXldmq1bNoq+e748tJvo0egtq01v78/ro4rZIchq0UntV0y54YkakJmdqU08qJw/z5/Lt6tMNauLxns8J3urwMqrxZspMoiNag0bsQqaoVmtKpzqQOlM19xrQEooYce/LU7ubK4/bp9IoHfO/K64off5oNi686o8SFvrQMop5ElZEThKpGn+XD4rgjqN2J1KcWmOnL5tFtxu3b7PPc8bkDpo0hguOd3LhHrZIPhIMXeJ0Sj7AInvnr+LAso6wEmr9Ks9OHzKlgot7B27ZgrYkUffDO7aUHlaEYk/nu+LQbpO3R6ujT5n4ZdOvD55gEibkMp4Ebd8qWxLMSooIUd58mk5YTiagSmZ8NkJQvir4XrbkGprITobgQp7AToIggfZcbirlwstCmy+LI4K8UnsCBusEjsOzH6PLi8KwgnqwOm6wTnIEgd9t90fz3+4Eid3klcH4jdXwkc3clb70Pq////yH5BAAAAAAALAAAAAAsACwAAAf/gH6Cg4SFhoeIiYqLjI2Oj5CRkpN+H5MfP5aUfpmQHx85DmWSH2QAFWQ/jp9BfwiqkZ8uf1AIZZqJH2Wtfw6wkT+8f0Fwv4c/d3/KooUjzs/Q0D8Iyso+vtHPPw4R1aLZ4NlacEfVf3g8KFrRWmQq5t/QZ/P09fYowtUVKPc85hGi7A0YSLCgwRkGCJhTtu/MwHmzqk0xMMOgxYsEUeRY+CcCAhQDZ0jQYM4FxpMWKzbgeESCkQFG/JkL8tJgl5s4c+q8aQQHFI4qqMxIgmEhAiM7zShdyrTp0p5YOAIwYgSAuQM4ZjhFw7Wr169e6VDB0M1chSQrq2G4ABYNhbdw/+PKjeuGzgUlaZURkJB3L525gN9eGHzhL9w6hKNEqaMEg49ucaJ2PBElMInLmC8r4cBZQhjMczhzRmJCAocljztaUzLnwufMsC+HmXOgGo8ol0ubExJlh7IIZX9HOLBEx2vMOpIrNxGDZEchJpKL4VCNxZw5LDhyxBBduQ4F4MOLASGRNHgxJ6rtYD6FgPv3BIL/YZHARPj74tMrqyKmv5gsIlSzgBgKJGBgAjEkmGBeeMRQxH1SRCghDAEqswMIGGJYRTUZZBFDhkIUIWIRWXRQDQEOSiiFBSy2aMEN2nHUQRYLVAMBDC3CkEE1cnzhogUFBBlkEV/UFmM1EcQAhv9vymQAg5Aw1KjMDUUIaaWQYNjg3JF/HPBFkdV0MISVK1QjwphWqqGmmkM4IdEaTnTQgRNS/rFClmVFYAMYaoLxRXbKeDDEmoSuOYQM6tUwxKItVPjHAi24qYyXQ9RQQ6Tm2FBDoRN02mkNdS5Qg6cTlKmMDC0gqkwPNrRqQwdG/tFDCKTW6imTf2TwhKdjxOpECxCYo8GwHL2xa60PJJvsGID+wcATyT5BQ1l40NDCBgrJUQIeyrAAwQY7QqDsuOQ+EUCeNED7wBMM8BgCFwzQsIEMa1jx7RpctAHBG0CkQG6yLwQccAgBFEwDEAK/MEbBAdCQQhN2QlwCE2xY0cOKt2N4kULCCafhsccpECEyER+DPDIRXrDxRxtW/FECAxOPgXIKJdechgA456zzzjtvwQQTWwjARhNbeHFFCjwnrfTSOm9xhR1B08B00nlUbfXVWGd9tR1XaO111XuELfbYZJdt9tln86H22my37fbbcMOtx9x012333XjnnXcffPft99+ABy644IEAADs=";
				break;		
				
			case "XXX: MOVIES-HD":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAOWt4KFLmIQherYRpfrz+ZsZjsEwsvTl889Zw6ssnqQXldmq1bNoq+e748tJvo0egtq01v78/ro4rZIchq0UntV0y54YkakJmdqU08qJw/z5/Lt6tMNauLxns8J3urwMqrxZspMoiNag0bsQqaoVmtKpzqQOlM19xrQEooYce/LU7ubK4/bp9IoHfO/K64off5oNi686o8SFvrQMop5ElZEThKpGn+XD4rgjqN2J1KcWmOnL5tFtxu3b7PPc8bkDpo0hguOd3LhHrZIPhIMXeJ0Sj7AInvnr+LAso6wEmr9Ks9OHzKlgot7B27ZgrYkUffDO7aUHlaEYk/nu+LQbpO3R6ujT5n4ZdOvD55gEibkMp4Ebd8qWxLMSooIUd58mk5YTiagSmZ8NkJQvir4XrbkGprITobgQp7AToIggfZcbirlwstCmy+LI4K8UnsCBusEjsOzH6PLi8KwgnqwOm6wTnIEgd9t90fz3+4Eid3klcH4jdXwkc3clb70Pq////yH5BAAAAAAALAAAAAAsACwAAAf/gH6Cg4SFhoeIiYqLjI2Oj5CRkpN+H5MfP5aUfpmQHx85DmWSH2QAFWQ/jp9BfwiqkZ8uf1AIZZqJH2Wtfw6wkT+8f0Fwv4c/d3/KooUjzs/Q0D8Iyso+vtHPPw4R1aLZ4NlacEfVf3g8KFrRWmQq5t/QZ/P09fYowtUVKPc85hGi7A0YSLCgwRkGCJhTtu/MwHmzqk0xMMOgxYsEUeRY+CcCAhQDZ0jQYM4FxpMWKzbgeESCkQFG/JkL8tJgl5s4c+q8aQQHFI4qqMxIgmEhAiM7zShdyrTp0p5YOAIwYgSAuQM4ZjhFw7Wr169e6VDB0M1chSQrq2G4ABYNhbdw/+PKjeuGzgUlaZURkJB3L525gN9eGHzhL9w6hKNEqaMEg49ucaJ2PBElMInLmC8r4cBZQhjMczhzRmJCAocljztaUzLnwufMsC+HmXOgGo8ol0ubExJlh7IIZX9HOLBEx2vMOpIrNxGDZEchJpKL4VCNxZw5LDhyxBBduQ4F4MOLASGRNHgxJ6rtYD6FgPv3BIL/YZHARPj74tMrqyKmv5gsIlSzgBgKJGBgAjEkmGBeeMRQxH1SRCghDAEqswMIGGJYRTUZZBFDhkIUIWIRWXRQDQEOSiiFBSy2aMEN2nHUQRYLVAMBDC3CkEE1cnzhogUFBBlkEV/UFmM1EcQAhv9vymQAg5Aw1KjMDUUIaaWQYNjg3JF/HPBFkdV0MISVK1QjwphWqqGmmkM4IdEaTnTQgRNS/rFClmVFYAMYaoLxRXbKeDDEmoSuOYQM6tUwxKItVPjHAi24qYyXQ9RQQ6Tm2FBDoRN02mkNdS5Qg6cTlKmMDC0gqkwPNrRqQwdG/tFDCKTW6imTf2TwhKdjxOpECxCYo8GwHL2xa60PJJvsGID+wcATyT5BQ1l40NDCBgrJUQIeyrAAwQY7QqDsuOQ+EUCeNED7wBMM8BgCFwzQsIEMa1jx7RpctAHBG0CkQG6yLwQccAgBFEwDEAK/MEbBAdCQQhN2QlwCE2xY0cOKt2N4kULCCafhsccpECEyER+DPDIRXrDxRxtW/FECAxOPgXIKJdechgA456zzzjtvwQQTWwjARhNbeHFFCjwnrfTSOm9xhR1B08B00nlUbfXVWGd9tR1XaO111XuELfbYZJdt9tln86H22my37fbbcMOtx9x012333XjnnXcffPft99+ABy644IEAADs=";
				break;					
				
			case "XXX: DVD":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAPZ16Niy1OOp3e5y4bVbrPaF6vpx6/uV8OJu1tKjzdua1cpnwKVbnerU6MqKw/76/v/8/vJz5OVv2MFkt/Pl8dWHzee44r1cs71jtPJt5OyU4/zi+fic7vuk8udq2s2Tx8R7vPN05tug1ctYv9SYztprzudw2qFTmf3q+9qO0vOn68RluvrD9atVotiq08OLvfDU7u7N6/r0+f3a+uKW2qlcobp6tLtvtOXF4cNturVprOqm47Zgrbpiselx3NFpxfnZ9txt0dlmzfp97fji9f7x/eXO4/bN8etx3u174adNnd9t09Zry8dmvfPH7vXT8dFkxfnw+PC56u5u4L1gs/pv669oqPm08tVkyd1p0ahZoPz2/MVfu79ntfdx6fZu581ow9RqyPBz46xepLNgqq9fp8NguPz4++ty3rdnrvDa7uJo1fRx5ulj2/vL9rBXp/F25Pfu9vjp99/A3OjM5fzT9+zH6NVwy7llsJ5Zl5tYlJdXkJNWjaJamvp27P///yH5BAAAAAAALAAAAAAsACwAAAf/gH6Cg4SFhoeIiYqLjI2Oj5CRiAYGkohDfpWLBh0HmpaDBhwznp+GVR0QHVWghAYHfxAsQ6aDVQcPfxysrYNDKH9/KAe8oQVFwRy1oFUswX8Pq65uz8qMANjZ2tleBxDPql/YXgW5wQfi2+rr61/O4BziX1fPRQVs7Noh+/z9/WxwNjz7Yy8DmzrPZkTwx3BfhIcQI0rMUEDgsw1wIlj8cyWDxI8PxYgcSbKkmClJqD1jAQfYnzMFppicOaCmzZs4a06ZwgGIORUuWUzJSXQAkqNIkyo9igZJGyQqBG7ZIizJlKZLl/rYyrWr160efEQtYi6WhrBf0/owwbat27cm/zwkAQLh28A/RyTA3ctWgt+/gAP7BfJHgwa7AzWsEcxYAoLHkCNLXrMjmBQpd4M5WSO5M+QloEOLHp3lSOa7T7KMXh06iOvXsGNneXJ6oBMhsXO/LsG7t+/fQmiUPS1FyO/jvZkoX868ORMsNIjU/rMDi/PrTMJo3869u3Yod6JnflABivfzYX6oX8++/XooI2D8ISLnz5YYKaC4368ejP//AAbo3wIppGCBHQoIYEGCIiwg4IMDLiDhhBRWuAAXIvyhRhQIxhCDBRU0YeGIEjZh4okopmgiFxXAIIIaMFQQIhdcqGjjiSvkqOOOPOrYxAoX5JCCGWb0aGSPEySp5P+SSV5wQZNOPjnBBVRIWSWUTGaJwZZcdklFFySI0EUOLpTpABUYUAGCCzlc8IELXVwQZpd0btnDnXjmSQAOwdABwh8yyPCHCwTsOegbDvwRQKKE5uloDzxEKqmkBPyZwAcQkPDHBwTQIQMeN8iwBQU8vJHASzgQMOmqkZLh6quvIvoHCDecEcAfDijxwQNpJLAFpg688UYDMqRRBqzIulrGsswy+4YNm77wx6kvtDCHDDqo8UcDf+DQQgsBUNBCs+QyO8a56KJbgxZGPHBGA9DGQcGg0hoxB7c2KDFHFFqk66+6NQQssMBaWJGAC1ZYEcDCL2jxggs1nKCwDSe8kIBZFgNnLDADHHfsMQN9nHBCHwyILDLIJ3AcMskhf+yyyn3ELPPMNNds880256Hzzjz37PPPQAOtx9BEF2300UgnnfQeTDft9NNQRy211HxUbfXVWGet9dZbBwIAOw==";
				break;
				
			case "XXX: Other":
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAPZ16Niy1OOp3e5y4bVbrPaF6vpx6/uV8OJu1tKjzdua1cpnwKVbnerU6MqKw/76/v/8/vJz5OVv2MFkt/Pl8dWHzee44r1cs71jtPJt5OyU4/zi+fic7vuk8udq2s2Tx8R7vPN05tug1ctYv9SYztprzudw2qFTmf3q+9qO0vOn68RluvrD9atVotiq08OLvfDU7u7N6/r0+f3a+uKW2qlcobp6tLtvtOXF4cNturVprOqm47Zgrbpiselx3NFpxfnZ9txt0dlmzfp97fji9f7x/eXO4/bN8etx3u174adNnd9t09Zry8dmvfPH7vXT8dFkxfnw+PC56u5u4L1gs/pv669oqPm08tVkyd1p0ahZoPz2/MVfu79ntfdx6fZu581ow9RqyPBz46xepLNgqq9fp8NguPz4++ty3rdnrvDa7uJo1fRx5ulj2/vL9rBXp/F25Pfu9vjp99/A3OjM5fzT9+zH6NVwy7llsJ5Zl5tYlJdXkJNWjaJamvp27P///yH5BAAAAAAALAAAAAAsACwAAAf/gH6Cg4SFhoeIiYqLjI2Oj5CRiAYGkohDfpWLBh0HmpaDBhwznp+GVR0QHVWghAYHfxAsQ6aDVQcPfxysrYNDKH9/KAe8oQVFwRy1oFUswX8Pq65uz8qMANjZ2tleBxDPql/YXgW5wQfi2+rr61/O4BziX1fPRQVs7Noh+/z9/WxwNjz7Yy8DmzrPZkTwx3BfhIcQI0rMUEDgsw1wIlj8cyWDxI8PxYgcSbKkmClJqD1jAQfYnzMFppicOaCmzZs4a06ZwgGIORUuWUzJSXQAkqNIkyo9igZJGyQqBG7ZIizJlKZLl/rYyrWr160efEQtYi6WhrBf0/owwbat27cm/zwkAQLh28A/RyTA3ctWgt+/gAP7BfJHgwa7AzWsEcxYAoLHkCNLXrMjmBQpd4M5WSO5M+QloEOLHp3lSOa7T7KMXh06iOvXsGNneXJ6oBMhsXO/LsG7t+/fQmiUPS1FyO/jvZkoX868ORMsNIjU/rMDi/PrTMJo3869u3Yod6JnflABivfzYX6oX8++/XooI2D8ISLnz5YYKaC4368ejP//AAbo3wIppGCBHQoIYEGCIiwg4IMDLiDhhBRWuAAXIvyhRhQIxhCDBRU0YeGIEjZh4okopmgiFxXAIIIaMFQQIhdcqGjjiSvkqOOOPOrYxAoX5JCCGWb0aGSPEySp5P+SSV5wQZNOPjnBBVRIWSWUTGaJwZZcdklFFySI0EUOLpTpABUYUAGCCzlc8IELXVwQZpd0btnDnXjmSQAOwdABwh8yyPCHCwTsOegbDvwRQKKE5uloDzxEKqmkBPyZwAcQkPDHBwTQIQMeN8iwBQU8vJHASzgQMOmqkZLh6quvIvoHCDecEcAfDijxwQNpJLAFpg688UYDMqRRBqzIulrGsswy+4YNm77wx6kvtDCHDDqo8UcDf+DQQgsBUNBCs+QyO8a56KJbgxZGPHBGA9DGQcGg0hoxB7c2KDFHFFqk66+6NQQssMBaWJGAC1ZYEcDCL2jxggs1nKCwDSe8kIBZFgNnLDADHHfsMQN9nHBCHwyILDLIJ3AcMskhf+yyyn3ELPPMNNds880256Hzzjz37PPPQAOtx9BEF2300UgnnfQeTDft9NNQRy211HxUbfXVWGet9dZbBwIAOw==";
				break;				
				
			default:
				categoryImgUrl = "data:image/gif;base64,R0lGODlhLAAsAOYAAL6mfIttNayOWNfAkGpTIYleFKiKVItfE4ddFaGDTKqMVsyyftG4hoRcFq+QWsKkbWZOJNbEoIFhFaGBSreaZKuNVpZ3QXRZHJx6PtjMtYNjKnFXHda/kY5hEYllEJh5Q9/Nppp8RqiKVmlPI8mteGJOJamJUmZQI25VH31fF6mJVM61gaSGUIFaGJFyO4RiE3dWHODRtNa+jtS9jNG5iKaGT5+ASsuwfJh5QHtdGaN+PHVSE9S8is+3hKWEUIZkEdW+jdO9i6uMVXNODoJbF39aGHVVHXtYGn5ZGXpXG6eJU31ZGXhXG66PWaqLVaeIUnhVGH5cIntYHaaHUYJpEnlbGXxYGnhWHJp5QHdbGtW+js2zgGJMJmFNJWFPJYNcFpJyPaeIU8i1lKqGRKeJVJdtIdO8jNDBpM+4hs6+oZFlGseyj6qLWJ9/TKOET5t2NmdPI3FTH3RUHnJUHmNMJmxRIW9SIGpQIm1RIY1gEpBhEY9hEZBiEK+RW4lmEJFiECH5BAAAAAAALAAAAAAsACwAAAf/gFR+g4SFhoeIiYdUHn+Oj5CRkpOUkh5+lZmam4Obnp+PnaCjmaKkp5GmqKuqq6d+Hnyys7S1tre4th4eer2+v8DBwsPBHj97yMnKy8zNzsw/Px3T1NXTZQ83NwsLNxxnEVsL4t0kY9boHdF57O3ueWoPKzRmM1o8IBkxA0BaQDNmaGzR8a7gjxcF3XWgsIBGEBkcBsjIt2+ARQ4yZjAg8SZhuxcvDogcSdIEiRtbejCgQaMHRTMrV6LpsYXEAx0kc4LMmXPClDAqDAgVMQVAGjFsyIgQakCFkjA+sPAc+UJCgatYs9pg8URJUxMqagA4s8YAWBVgDSh5wgJL1rcS/6y+zTpBiYIKAvIKEAIAAAW9gCs4eYJhLta4CBIrXpzAiYAmDiJHboJXsuQme5VgWMwZMWfGjh30GU26tGkHFQxs/pxYQooGsGPLbizABmkWIVz0cRLCye4QtlGrlk08RYovxGc7SbAjRB8WUDQMCbBjyA4bUIYMiSIcQ3LYX4wTGU++fOMEQ6CwiDJEunUXFqLscBEghHAs5fOnyNGiv///51m3Q3XSUTeEFO2Rdt9/DOaQQxEQRihhgAFI4UJ7Q9hgQQDWQZGbfalhIeGIOVSBxIkophigbixgWN17L0ohHA4p1lhFFlYsoeOOO9LmAgujuZCbExa44JsT8DlBmf8BOPDIoxVZZHHElFRWSZtopmU5mgNL4lDll1lckMSYZJaZgAF4NaHmmmy2KYACSuBQ5pwXXHAFE3jmmacNTxhwVwWABiqooE4YMIUFeup5RZ0wNOroo22wMEVXSlRq6aWXPjGFGxY86ukFGxgh6qikgmHBqR+kquqqrH5wagCkxrrBBnLUauutuOaq6665boBCHHMEK+ywxBZr7LHDxoHCr3E06+yz0EYr7bTQLmvHtdhmq+223Ha7LQoE4CHuuOSWa+656JpLAAF31OHuu/DGK++89MJ7x7p35Kvvvvz26++//RJwwggEF2zwwQgnrDDCJ5wAARwQRyzxxBRXbLEyxBA0DMHGHHfs8ccgh/zxCSVwQcfJKKes8sost5wyFyV40UUJNNds880456yzzV14EQgAOw==";
				break;
		}		
		
		return categoryImgUrl;
	}
	
	function currentPageNumber() {		
		// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values?page=2&tab=votes#tab-top
		var qs = window.location.search.replace('?','').split('&'),
	    request = {};
		
		$.each(qs, function(i,v) {
		    var pair = v.split('=');
		    return request[pair[0]] = pair[1];
		});
		
		return request.p || 1;
	}
	
	// Iterate through each category column and replace the standard text with an image
	$(".nzbt_type").each(function (i) {
		var link = $(this).children("a.linky");
		var category = $(link).html();		
	
		var imgHtml = "<img src='" + getCategoryImageUrl(category) + "' alt='" + category + "' title='" + category + "' />";
		$(link).html(imgHtml);
	});		
			 
	var lastRlsFound = false;
	
	$(".nzbt_name").each(function (i) {
		var link = $(this).children("a.linky")[0];
		var rlsName = $(link).attr('title');
		
		if ($.cookie('lastRls') == rlsName) {
			lastRlsFound = true;
			return;
		} 		
		
		if (!lastRlsFound && currentPageNumber() == "1") {
			var newTagHtml = "<span style='font-weight:bold;font-size:0.85em;color:#58cbf6'>&nbsp;NEW!</span>";
			$(link).after(newTagHtml);
		}
	});		
	
	// Update the last seen release (set to the current pages first release)		
	if (currentPageNumber() == "1" || currentPageNumber() == 1) {
		var firstRls = $(".nzbt_name").first().children("a.linky")[0];
		var firstRlsName = $(firstRls).attr('title');	
		$.cookie('lastRls', firstRlsName, { expires: 30, path: '/' });
	}
})(jQuery);