alert('ПРОВЕРКА НА ТРЕЗВОСТЬ!!!');

while(1)
{
	let a = Math.floor(Math.random() * 20 - 10);
	let b = Math.floor(Math.random() * 20 - 10);
	let o = Math.random() * 3;

	if ( Math.round(o) == 0)
	{
		let d = prompt ( '(' + a + ') + (' + b + ') = ');
		if ( d == a + b )
		{
			alert ('Давай ещё одну!');	
		}else
		  {
			alert('Харэ бухать!');
			break;
		  }

	} else if ( Math.round(o) == 1)
		{
			let d = prompt ( '(' + a + ') - (' + b + ') = ');
			if ( d == a - b ) 
			{
				alert ('Давай ещё одну!');	
			}else
		  	{
				alert('Харэ бухать!');
				break;
		  	}

		}else if ( Math.round(o) == 2)
			{
				let d = prompt ( '(' + a + ') * (' + b + ') = ');
				if ( d == a * b ) 
				{
					alert ('Давай ещё одну!');	
				}else
		  		{
					alert('Харэ бухать!');
					break;
		  		}

			} else if ( Math.round(o) == 3)
				{
					let d = prompt ( '(' + a + ') / (' + b + ') = (с точностью до десятых) ');
					var res = a / b;
					if ( res.toFixed(1) == d ) 
					{
						alert ('Давай ещё одну!');
					} else
		  			{
						alert('Харэ бухать!');
						break;
		  			}
				}  
}

