module ApplicationHelper
	def collect_js(*patterns)
		options = patterns.extract_options!.stringify_keys
		recursion = !options["without_recursion"] # with recursion by default
		patterns.collect do |pattern|
			scripts = collect_asset_files(File.join(RAILS_ROOT, 'public', 'javascripts'), pattern + '.js')
			scripts = scripts + collect_asset_files(File.join(RAILS_ROOT, 'public', 'javascripts'), pattern, '**', '*.js') if recursion
			scripts
		end
	end

	def collect_css(*patterns)
		options = patterns.extract_options!.stringify_keys
		recursion = !options["without_recursion"] # with recursion by default
		patterns.collect do |pattern|
			scripts = collect_asset_files(File.join(RAILS_ROOT, 'public', 'stylesheets'), pattern + '.css')
			scripts = scripts + collect_asset_files(File.join(RAILS_ROOT, 'public', 'stylesheets'), pattern, '**', '*.css') if recursion
			scripts
		end
	end
end
