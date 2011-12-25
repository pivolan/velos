/**
 * Created by JetBrains RubyMine.
 * User: Dachiko
 * Date: 30.10.11
 * Time: 15:53
 * To change this template use File | Settings | File Templates.
 */

var block_main_menu = {
	$block: null,
	$content: null,
	a_tags_repository: {},
	init:function(menu_items){
		this.$block = $('nav.menu-wrapper');
		this.$block.empty();
		if (typeof(menu_items) != 'object')
		{
			this.$content = $('<p>Error loading menu content</p>');
		}
		else
		{
			this.$content = $('<ul class="main-menu"></ul>');
			for (var index in menu_items)
			{
				var menu_item = menu_items[index];
				var $li_item = $('<li></li>');
				$li_item.data('id', menu_item.id);
				var $a_tag = $('<a href="' + menu_item.link + '">' + menu_item.name + '</a>');
				$a_tag.click(function(event){
					event.preventDefault();
					block_main_menu.menu_actions.set_active($(this).parent());
					block_main_menu.menu_actions.set_unclickable($(this).parent());
				});
				if (menu_item.active)
				{
					$li_item = this.menu_actions.set_active($li_item);
				}
				if (menu_item.show_as_link)
				{
					$li_item.append($a_tag);
				}
				else
				{
					$li_item.html(menu_item.name);
				}
				this.a_tags_repository[menu_item.id] = $a_tag.clone(true);
				this.$content.append($li_item);
			}
			this.$block.append(this.$content);
		}
	},
	menu_actions: {
		set_active: function($li_item)
		{
			// найдём текущий активный пункт меню
			var $active_item = block_main_menu.$block.find('li.active');

			if($active_item.length)
			{
				// сделаем его неактивным и кликабельным
				var active_item_id = $active_item.data('id');
				$active_item.empty();
				$active_item.prepend(block_main_menu.a_tags_repository[active_item_id].clone(true));
				$active_item.removeClass('active');
			}

			// сделаем нужный элемент активным
			$li_item.addClass('active');
			return $li_item;
		},
		set_clickable: function($li_item)
		{
			var item_id = $li_item.data('id');
			$li_item.html(block_main_menu.a_tags_repository[item_id]);
			return $li_item;
		},
		set_unclickable: function($li_item)
		{
			var text = $li_item.find('a').html();
			$li_item.html(text);
			return $li_item;
		}
	}
}