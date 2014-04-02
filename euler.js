var start = +new Date();

function euler1() {
	var sum = 0;
	for(var i=0; i<1000; i++) {
		if((i%3 == 0) || (i%5 == 0)) {
			sum += i;	
		}
	}
	return sum;
}

function euler2() {
	var sum = 0,
		i = 2,
		prev = 1;

	while(i<4e6) {
		var current = i;
		if(i%2 == 0) {
			sum += i;
		}
		i = i+prev;
		prev = current;
	}
	return sum;
}

function euler3(n) {
	if(!n) {
		var n = 600851475143;
	}
	var max = Math.round(Math.sqrt(n));

	for(var i=max; i>1; i--) {
		if(n%i == 0 && !euler3(i)) {
			return i;
		}
	}
	return false;
}

function euler4() {
	var min = 100,
		max = 999,
		largest = 0;

	for(var i=max; i>=min; i--) {
		for(var j=max; j>=min; j--) {
			var x = i * j,
				y = Number(x.toString().split("").reverse().join(""));
			if(x > largest && x == y) {
				largest = x;
			}
		}
	}
	return largest;
}

function euler5() {
	var min = 1,
		max = 20,
		sum = 1;

	function divisible(n) {
		for(var i=max; i>=min; i--) {
			if(n%i != 0) {
				return false;
			}
		}
		return true;
	}

	while(!divisible(sum)) {
		sum++;
	}
	return sum;
}

function euler6() {
	var min = 1,
		max = 100,
		sum = 0;

	for(var i=min; i<=max; i++) {
		sum += Math.pow(i, 2);
	}
	sum = Math.pow((min + max)*(max/2), 2) - sum;

	return sum;
}

function euler7() {
	var end = 10001,
		index = 0,
		num = 0,
		prime = 0;

	function isPrime(n) {
		if(n<2) {
			return false;
		}

		for (var i=2; i<n; i++) {
			if(n%i == 0) {
				return false;
			}
		}
		return true;
	}

	while(index != end) {
		if(isPrime(num)) {
			index++;
			prime = num;
		}
		num++;
	}
	return prime;
}

function euler8() {
	var num = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450",
		nums = num.toString().split(""),
		cons = 5,
		length = num.length,
		highest = 0;

	for(var i=cons; i<=length; i++) {
		var sum = 1;
		for(var j=1; j<=cons; j++) {
			sum *= parseInt(nums[i-j]);
		}
		if(sum > highest) {
			highest = sum;
		}
	}
	return highest;
}

function euler9() {
	var sum = 1000,
		product = 0;

	for(var a=1; a<sum; a++) {
		for(var b=a+1; b<sum; b++) {
			var ab = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)),
				c = sum - a - b;
			if(c == ab) {
				product = a*b*c;
			}
		}
	}
	return product;
}

function euler10() {
	var max = 2e6,
		sum = 0;

	function isPrime(n) {
		var sqrt = Math.sqrt(n);

		for (var i=2; i<=sqrt; i++) {
			if(n%i == 0) {
				return false;
			}
		}
		return true;
	}

	for(i=2; i<max; i++) {
		if(isPrime(i)) {
			sum += i;
		}
	}

	return sum;

}

function euler11() {
	var string = "08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48",
		string = string.split(" "),
		length = Math.sqrt(string.length),
		grid = [],
		cons = 4,
		highest = 0,
		sum = 0;

	while(string[0]) {
		grid.push(string.splice(0,length));
	}

	for(var c=0; c<length; c++) {
		for(var r=0; r<length; r++) {

			//horisontal
			if(c <= length-cons) {
				sum = parseInt(grid[r][c]);
				for(var j=1; j<cons; j++) {
					sum *= parseInt(grid[r][c+j]);
				}
				highest = Math.max(highest, sum);
			}

			//vertical
			if(r <= length-cons) {
				sum = parseInt(grid[r][c]);
				for(var j=1; j<cons; j++) {
					sum *= parseInt(grid[r+j][c]);
				}
				highest = Math.max(highest, sum);

				//diagonal down ltr
				if(c <= length-cons) {
					sum = parseInt(grid[r][c]);
					for(var j=1; j<cons; j++) {
						sum *= parseInt(grid[r+j][c+j]);
					}
					highest = Math.max(highest, sum);
				}

				//diagonal up ltr
				if(c >= cons-1) {
					sum = parseInt(grid[r][c]);
					for(var j=1; j<cons; j++) {
						sum *= parseInt(grid[r+j][c-j]);
					}
					highest = Math.max(highest, sum);
				}
			}
		}
	}

	return highest;
}

function euler12() {
	var max = 500,
		i = 1;

	function triangleNum(n) {
		var sum = 0;

		for(var i=0; i<=n; i++) {
			sum += i;
		}

		return sum;
	}

	function divisors(n) {
		var list = [],
			i = 1,
			max = n; // ?

		if(n == 1) {
			return 1;
		}

		while(i <= max) {
			if(n%i == 0) {
				list.push(i);

				if(i != n/i) {
					list.push(n/i);
                }
                max = n/i;
			}
			i++;
		}

		return list.length;
	}

	while(divisors(triangleNum(i)) < max) {
		i++;
	}

	return triangleNum(i);
}

function euler13() {
	var input = "37107287533902102798797998220837590246510135740250463769376774900097126481248969700780504170182605387432498619952474105947423330951305812372661730962991942213363574161572522430563301811072406154908250230675882075393461711719803104210475137780632466768926167069662363382013637841838368417873436172675728112879812849979408065481931592621691275889832738442742289174325203219235894228767964876702721893184745144573600130643909116721685684458871160315327670386486105843025439939619828917593665686757934951621764571418565606295021572231965867550793241933316490635246274190492910143244581382266334794475817892575867718337217661963751590579239728245598838407582035653253593990084026335689488301894586282278288018119938482628201427819413994056758715117009439035398664372827112653829987240784473053190104293586865155060062958648615320752733719591914205172558297169388870771546649911559348760353292171497005693854370070576826684624621495650076471787294438377604532826541087568284431911906346940378552177792951453612327252500029607107508256381565671088525835072145876576172410976447339110607218265236877223636045174237069058518606604482076212098132878607339694128114266041808683061932846081119106155694051268969251934325451728388641918047049293215058642563049483624672216484350762017279180399446930047329563406911573244438690812579451408905770622942919710792820955037687525678773091862540744969844508330393682126183363848253301546861961243487676812975343759465158038628759287849020152168555482871720121925776695478182833757993103614740356856449095527097864797581167263201004368978425535399209318374414978068609844840309812907779179908821879532736447567559084803087086987551392711854517078544161852424320693150332599594068957565367821070749269665376763262354472106979395067965269474259770973916669376304263398708541052684708299085211399427365734116182760315001271653786073615010808570091499395125570281987460043753582903531743471732693212357815498262974255273730794953759765105305946966067683156574377167401875275889028025717332296191766687138199318110487701902712526768027607800301367868099252546340106163286652636270218540497705585629946580636237993140746255962240744869082311749777923654662572469233228109171419143028819710328859780666976089293863828502533340334413065578016127815921815005561868836468420090470230530811728164304876237919698424872550366387845831148769693215490281042402013833512446218144177347063783299490636259666498587618221225225512486764533677201869716985443124195724099139590089523100588229554825530026352078153229679624948164195386821877476085327132285723110424803456124867697064507995236377742425354112916842768655389262050249103265729672370191327572567528565324825826546309220705859652229798860272258331913126375147341994889534765745501184957014548792889848568277260777137214037988797153829820378303147352772158034814451349137322665138134829543829199918180278916522431027392251122869539409579530664052326325380441000596549391598795936352974615218550237130764225512118369380358038858490341698116222072977186158236678424689157993532961922624679571944012690438771072750481023908955235974572318970677254791506150550495392297953090112996751986188088225875314529584099251203829009407770775672113067397083047244838165338735023408456470580773088295917476714036319800818712901187549131054712658197623331044818386269515456334926366572897563400500428462801835170705278318394258821455212272512503275512160354698120058176216521282765275169129689778932238195734329339946437501907836945765883352399886755061649651847751807381688378610915273579297013376217784275219262340194239963916804498399317331273132924185707147349566916674687634660915035914677504995186714302352196288948901024233251169136196266227326746080059154747183079839286853520694694454072476841822524674417161514036427982273348055556214818971426179103425986472045168939894221798260880768528778364618279934631376775430780936333301898264209010848802521674670883215120185883543223812876952786713296124747824645386369930090493103636197638780396218407357239979422340623539380833965132740801111666627891981488087797941876876144230030984490851411606618262936828367647447792391803351109890697907148578694408955299065364044742557608365997664579509666024396409905389607120198219976047599490197230297649139826800329731560371200413779037855660850892521673093931987275027546890690370753941304265231501194809377245048795150954100921645863754710598436791786391670211874924319957006419179697775990283006991536871371193661495281130587638027841075444973307840789923115535562561142322423255033685442488917353448899115014406480203690680639606723221932041495354150312888033953605329934036800697771065056663195481234880673210146739058568557934581403627822703280826165707739483275922328459417065250945123252306082291880205877731971983945018088807242966198081119777158542502016545090413245809786882778948721859617721078384350691861554356628840622574736922845095162084960398013400172393067166682355524525280460972253503534226472524250874054075591789781264330331690",
		sum = 0;

	var arr = Array.prototype.slice.call(input);
	while(arr.length) {
		sum += parseInt(arr.splice(0,50).join(""));
	}

	sum = sum.toString().slice(0,10)*10e8;
	return sum;
}

function euler14() {
	var max = 1e6,
		num = 0,
		streak = 0,
		longest = 0;

	for(var i=1; i<max; i++) {
		streak = 0;
		var n = i;
		while(n > 1) {
			if(n%2 == 0) {
				n = n/2;
			} else {
				n = 3*n+1;
			}
			streak++;
		}
		if(streak > longest) {
			longest = streak;
			num = i;
		}
	}

	return num;
}

function euler15() {
	var size = 20,
		grid = [];

	for(var i=0; i<size; i++) {
		grid[i,size] = 1;
		grid[size,i] = 1;
	}
	for(var i=1; i<=size; i++) {
		for(var j=1; j<=size; j++) {
			grid[i,j] = grid[i-1,j] + grid[i,j-1];
		}
	}

	return grid[size,size];
}

function euler16() {
	var exponent = 1000,
		list = [1],
		sum = 0;

	for(var i=0; i<exponent; i++) {
		var overflow = 0,
			count = list.length + 1;

		for(var j=0; j<count; j++) {
			var digit = list[j] || 0;

			digit = 2 * digit + overflow;

			if(digit > 9) {
				digit -= 10;
				overflow = 1;
			} else {
				overflow = 0;
			}
			list[j] = digit;
		}
	}

	for(var i=0; i<exponent; i++) {
		sum += list[i];
	}

	return sum;
}

function euler17() {
	var list = {1:3, 2:3, 3:5, 4:4, 5:4, 6:3, 7:5, 8:5, 9:4, 10:3, 11:6, 12:6, 13:8, 14:8, 15:7, 16:7, 17:9, 18:8, 19:8, 20:6, 30:6, 40:5, 50:5, 60:5, 70:7, 80:6, 90:6, 100:7, 1000:8},
		max = 1000,
		sum = 0;

	for(var i=1; i<=max; i++) {
		var str = i.toString();

		if(i < 10) {
			sum += list[i];
		}
		if(i >= 10 && i < 100) {
			var n1 = str.substring(0,1),
				n2 = str.substring(1,2);

			if(i < 20) {
				sum += list[i];
			} else {
				if(str.substring(1,2) == "0") {
					sum += list[i];
				} else {
					sum += list[n1 + "0"] + list[n2];
				}
			}
		}
		if(i >= 100 && i < 1000) {
			var n1 = str.substring(0,1),
				n2 = str.substring(1,2),
				n3 = str.substring(2,3),
				and = 3;

			if(i == 100) {
				sum += list[1] + list[100];
			} else if(n2 == "0" && n3 == "0") {
				sum += list[n1] + list[100];
			} else if(n3 == "0") {
				sum += and + list[n1]  + list[n2 + "0"] + list[100];
			} else if(n2 == "0") {
				sum += and + list[n1] + list[n3] + list[100];
			} else if(n2 == "1" && n3 != "0") {
				sum += and + list[n1] + list[n2 + n3] + list[100];
			} else {
				sum += and + list[n1] + list[n2 + "0"] + list[n3] + list[100];
			}
		}
		if(i == 1000) {
			sum += list[1] + list[1000];
		}
	}

	return sum;
}

function euler18() {
	var input = "75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23",
		input = input.split(" "),
		grid = [];

	var arr = Array.prototype.slice.call(input),
		i = 1;
	while(arr.length) {
		grid.push(arr.splice(0,i));
		i++;
	}

	var length = grid.length;
	for(var i=length-2; i>=0; i--) {
		for(var j=0; j<=i; j++) {
			grid[i][j] = parseInt(grid[i][j]) + Math.max(grid[i+1][j], grid[i+1][j+1]);
		}
	}

	return grid[0][0];
}

function euler19() {
	var month = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31},
		sundays = 0,
		days = 2; // Since 1901 starts on a Tuesday

	for(var y=1901; y<2001; y++) {

		// is it a leap year?
		if(y%400 == 0) {
			month[2] = 29;
		} else if(y%100 == 0) {
			month[2] = 28;
		} else if(y%4 == 0) {
			month[2] = 29;
		} else {
			month[2] = 28;
		}

		for(var m=1; m<13; m++) {
			days += month[m];
			if(days%7 == 0) {
				sundays++;
			}
		}
	}

	/*
	// Shorter and more dynamic, but 100x slower.
	for(var y=1901; y<2001; y++){
		for(var m=1; m<13; m++) {
			var d = new Date(y,m,1);
			if(d.getDay() == 0) {
				sundays++;
			}
		}
	}
	*/

	return sundays;
}

function euler20() {
	var factorial = 100,
		list = [1],
		sum = 0;

	// add each digit of the factorial to a list
	for(var i=1; i<=factorial; i++) {
		var overflow = 0,
			count = list.length+1;

		for(var j=0; j<=count; j++) {
			var num = list[j] || 0;

			num = i * num + overflow;

			// if number is over 9, store the overflow and remove it from the number.
			// example: num = 346; then -> overflow = 34 and num = 6;
			if(num > 9) {
				overflow = parseInt(num.toString().slice(0,-1));
				num = parseInt(num.toString().slice(-1));
			} else {
				overflow = 0;
			}
			list[j] = num;
		}
	}

	// sum all the numbers in the list together.
	for(var i=0; i<list.length; i++) {
		sum += list[i];
	}

	return sum;
}

function euler21() {
	var lim = 10000,
		amicableNums = [],
        b;

    function proper_divisors(n) {
        var list = [],
            max = n;

        for (var i = 0; i <= max; i++) {
            // we do not want to add same nuber multiple times
            if (list.indexOf(i) !== -1) continue;

            // check if number is an divisor
            if(n % i == 0 && i != n) {
                // add divisor to our list
                list.push(i);

                // These 4 following lines of code reduced my completion time from 25s to 3s
                if(i != n / i && n != n / i) {
                    // add divisor to our list
                    list.push(n/i);
                }
                // reduce numbers we have to iterate over
                max = n/i;
            }
        }

        // return list with divisors
        return list;
    }

    function d(n) {
        // if number is 1, it will only have 1 as an divisor
        if(n === 1) return 1;

        // get divisors
        var divs = proper_divisors(n);

        // add together our list of divisors and return the result
        return divs.reduce(function(a, b) {
            return a + b;
        });
    }

    for (var a = 1; a < lim; a++) {
        // if number already exists in our list, do not try it again
        if (amicableNums.indexOf(a) !== -1) continue;

        // set b
        b = d(a);

        // check if numbers are an amicable pair
        if (a == d(b) && b == d(a) && a != b) {
            // add amicable numbers to our list
            amicableNums.push(a, b);
        }

    }

    // add together all our amicable numbers and return the result
    return amicableNums.reduce(function(a, b) {
        return a + b;
    });
}


console.log("Result: " + euler21() + "\nTotal Time: " + (+new Date() - start)/1000 + "sec");