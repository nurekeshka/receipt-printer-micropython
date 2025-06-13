tell application "Terminal"
	activate
	
	-- Run bootstrap:machine.bash in first window
	do script "cd /Users/nurbek/Documents/GitHub/receipt-printer-micropython && ./scripts/bootstrap:machine.bash"
	
	-- Run bootstrap:browser.bash in second window
	do script "cd /Users/nurbek/Documents/GitHub/receipt-printer-micropython && ./scripts/bootstrap:browser.bash"
end tell
