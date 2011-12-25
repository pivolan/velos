/**
 * Created by JetBrains RubyMine.
 * User: Dachiko
 * Date: 23.10.11
 * Time: 15:41
 * To change this template use File | Settings | File Templates.
 */

var Core = {
	init: function(){
		var menu_items = [
			{
				id: 'rides_announcement',
				name: 'Ближайшие покатушки',
				link: '/rides/announcement',
				active: true,
				show_as_link: false
			},
			{
				id: 'rides_last',
				name: 'Прошедшие покатушки',
				link: '/rides/last',
				active: false,
				show_as_link: true
			},
			{
				id: 'rides_create',
				name: 'Создать покатушку',
				link: '/rides/create',
				active: false,
				show_as_link: true
			},
			{
				id: 'news',
				name: 'Новости',
				link: '/news',
				active: false,
				show_as_link: true
			}
		];
		block_main_menu.init(menu_items);
	},
	url_handler: {
		set_url: function(url)
		{

		},
		get_cur_url: function()
		{

		}
	}
};