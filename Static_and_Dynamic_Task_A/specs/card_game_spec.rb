require('minitest/autorun')
require('minitest/rg')
require_relative('../models/card_game')
require_relative('../models/card')

class CardGameTest < MiniTest::Test

  def test_check_for_ace
    cardGame = CardGame.new()
    card = Card.new('ace', 1)
    assert_equal(true, cardGame.check_for_ace(card))
  end

end