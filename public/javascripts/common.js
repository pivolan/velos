/**
 * Created by JetBrains RubyMine.
 * User: Dachiko
 * Date: 23.10.11
 * Time: 15:43
 * To change this template use File | Settings | File Templates.
 */
var Common =
{
	/**
	 * Формирует строку вида "10 куздр" с правильным склоненим названия перечисляемого объекта
	 * @param number - количество объектов (целое и вещественное)
	 * @param titles - три словоформы для чисел 1, 2 и 5 (например, [куздра, куздры, куздр])
	 */
	formatObjectNumber : function(number, titles)
	{
		var result = number;
		if ((typeof(number) == 'number') && (typeof(titles) == 'object') && (titles.length == 3))
		{
			var isInt = (Math.floor(number) == number);
			var index = 1; //для вещественных чисел
			if (isInt)
			{
				var cases = [2, 0, 1, 1, 1, 2];
				index = ((number % 100 > 4) && (number % 100 < 20)) ? 2 : cases[Math.min(number % 10, 5)];
			}
			result = number + ' ' + titles[index];
		}

		return result;
	},
	/**
	 * Форматирует красивую строку для показа расстояния в метрах/километрах
	 * @param distance - рассточние в километрах
	 */
	formatDistance : function(distance)
	{
		var result = distance;
		if (typeof(distance) == 'number')
		{
			if (distance >= 1)
			{
				//Показываем в километрах
				result = this.formatObjectNumber(Math.round(distance * 10) / 10, ['километр', 'километра', 'километров']);
			}
			else
			{
				//Показываем в метрах
				result = this.formatObjectNumber(Math.round(distance * 1000), ['метр', 'метра', 'метров']);
			}
		}
		return result;
	},
	/**
	 * Форматирует красивую строку для показа временного интервала
	 * @param milliseconds - длина вресменного интервала в миллисекундах
	 */
	formatTimeDifference : function(milliseconds)
	{
		var result = milliseconds;
		if ((typeof(milliseconds) == 'number') && (milliseconds >= 0))
		{
			var periods = [
				{div : 60, titles : ['минута', 'минуты', 'минут']},
				{div : 60, titles : ['час', 'часа', 'часов']},
				{div : 24, titles : ['день', 'дня', 'дней']},
				{div : 7, titles : ['неделя', 'недели', 'недель']}
			];
			var buf = milliseconds / 1000, stop = false;
			for (var i = 0; (!stop) && (i < periods.length); i++)
			{
				buf = buf / periods[i].div;
				if ((i == periods.length - 1) || (buf < periods[i + 1].div))
				{
					result = this.formatObjectNumber(Math.round(buf), periods[i].titles);
					stop = true;
				}
			}
		}
		return result;
	},
	/**
	 * Форматирует красивую строку для пока даты и времени начала мероприятия
	 * @param seconds
	 */
	formatDateTime : function(seconds)
	{
		var timestamp = new Date(seconds * 1000);
		var now = new Date();

		var date = '';
		var isSameMonth = ((timestamp.getYear() == now.getYear()) && (timestamp.getMonth() == now.getMonth()));
		var dayDiff = now.getDate() - timestamp.getDate();
		if (isSameMonth && (dayDiff == 0))
		{
			date = 'Сегодня';
		}
		else
		{
			if (isSameMonth && (dayDiff == -1))
			{
				date = 'Завтра';
			}
			else
			{
				var months = [
					'января', 'февраля', 'марта',
					'апреля', 'мая', 'июня',
					'июля', 'августа', 'сентября',
					'октября', 'ноября', 'декабря'
				];
				date = timestamp.getDate() + ' ' + months[timestamp.getMonth()];
			}

		}
		var minutes = timestamp.getMinutes();
		var prefix = (minutes < 10)? '0' : '';
		var time = timestamp.getHours() + ':' + prefix + minutes;
		return date + ' в ' + time;
	},
	bindCtrlEnterSubmit : function(selector)
	{
		if (selector == null)
		{
			selector = 'textarea.ctrl-enter-submit';
		}
		$(selector).live('keypress', function(evt)
		{
			if ((evt.ctrlKey === true) && ((evt.which == 13) || (evt.which == 10)))
			{
				if($(this).val() !=='')
				{
					$(this).parents('form').submit();
				}
			}
		});
	}
}