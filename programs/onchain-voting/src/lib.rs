pub mod instructions;

use anchor_lang::prelude::*;
use instructions::init_instruction::{init_instruction, InitVote, __client_accounts_init_vote};
use instructions::vote_instruction::{vote_instruction, Vote, VoteType, __client_accounts_vote};

declare_id!("EEDxZUNCWebntLkRVJtsVWFCHamrJPcmuEnRDXCnHzLb");

#[program]
pub mod onchain_voting {
    use super::*;

    pub fn init(ctx: Context<InitVote>) -> Result<()> {
        init_instruction(ctx)
    }

    pub fn vote(ctx: Context<Vote>, vote_type: VoteType) -> Result<()> {
        vote_instruction(ctx, vote_type)
    }
}
